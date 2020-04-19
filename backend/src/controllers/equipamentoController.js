const connection = require('../database/connection');
const generatePassword = require('../utils/crypto')

module.exports = {

    async newPassord(request, response){
        const {email, senha} = request.body
        try{
            await connection('hospital').update('senha', senha).where('email', email);
            await connection('hospital').update('passwordExpired', 0).where('email', email);
            return response.status(200).json({Success: 'password updated'})
        }catch{
            return response.status(400).json({error: 'error updating the password'})
        }
    },

    async criarEquipamento(request,response){
    const {numeroDeSerie, nomeEquipamento , qtdTotal, qtdEmUso, cnpj} = request.body

    try{
        await connection('equipamento').insert({
            numeroDeSerie,
            nomeEquipamento,
            qtdTotal,
            qtdEmUso,
            cnpj
    })
        return response.json({numeroDeSerie, nomeEquipamento , qtdTotal, qtdEmUso, cnpj});
    } catch{
        return response.json({error: 'erro'})
    }
    },

    async equipamentoId(request,response){
        const { cnpj } = request.body
        try{
            const equipamento = await connection('equipamento')
            .where('cnpj', cnpj)
            .select(
                'nomeEquipamento',
                'qtdTotal',
                'qtdEmUso',
                'cnpj'
            )
            return response.json(equipamento);
        } catch{
            return response.json({error: 'erro'})
        }
        }
}