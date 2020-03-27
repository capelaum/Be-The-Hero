const connection = require ('../database/connection');

module.exports = {

    async index(request, response) {

        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();  
        // console.log(count);
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset( (page-1)*5 )   // pulando 5 registros
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);    // pelo header da resposta da requisição

        return response.json(incidents);
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;       // verifica se foi criado o incidente

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if(incident.ong_id != ong_id) {
            return response.status(401).json ({ errpr: 'Operation not permited.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();     // qndo n tem conteudo no front-end - essa resposta 204
    }
};