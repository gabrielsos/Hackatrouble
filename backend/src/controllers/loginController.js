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

    async createHospital(request,response){
    const {cnpj, longitude, latitude , afe, email, nome, endereço, telefone, maxLeitosIsolamento, leitosIsolamentoOcupados, maxLeitosUti, leitosUtiOcupados} = request.body
    const senha = generatePassword();
    const passwordExpired = 1
    try{
        await connection('hospital').insert({
            cnpj,
            longitude,
            latitude,
            afe,
            email,
            senha,
            passwordExpired,
            nome,
            endereço,
            telefone,
            maxLeitosIsolamento,
            leitosIsolamentoOcupados,
            maxLeitosUti,
            leitosUtiOcupados
    })
        return response.json({longitude, latitude , email, senha, nome, endereço, telefone, maxLeitosIsolamento, leitosIsolamentoOcupados, maxLeitosUti, leitosUtiOcupados});
    } catch{
        return response.json({error: 'erro'})
    }
    },

    async createUsuario(request,response){
        const {cpf, rg , nome, dataNascimento, endereço, telefone, celular, carteirinha} = request.body
        try{
            await connection('usuario').insert({
                cpf,
                rg,
                nome,
                dataNascimento,
                endereço,
                telefone,
                celular,
                carteirinha
        })
            return response.json({cpf, rg , nome, dataNascimento, endereço, telefone, celular, carteirinha});
        } catch{
            return response.json({error: 'erro'})
        }
        }
}