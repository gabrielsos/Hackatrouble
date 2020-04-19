const connection = require('../database/connection');

module.exports = {

    async criarResponsavelTecnico(request,response){
    const {crf, nome , email, telefone, celular ,cnpj} = request.body

    try{
        await connection('responsavelTecnico').insert({
            crf,
            nome,
            email,
            telefone,
            celular,
            cnpj
    })
        return response.json({crf, nome , email, telefone, celular ,cnpj});
    } catch{
        return response.json({error: 'erro'})
    }
    },

    async responsavelTecnicoId(request,response){
        const { cnpj } = request.body
        try{
            const responsavel = await connection('responsavelTecnico')
            .where('cnpj', cnpj)
            .select(
                'crf',
                'nome',
                'email',
                'telefone',
                'celular'
            )
            return response.json(responsavel);
        } catch{
            return response.json({error: 'erro'})
        }
        }
}