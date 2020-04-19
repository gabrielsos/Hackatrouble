const connection = require('../database/connection');
const currentDate = require('../utils/currentDate');
const Knex = require('knex');
const configuration = require('../../knexfile');

const knex = Knex(configuration.development);

module.exports = {

    async horarioFuncionamentoAdd(request,response){    
        const { diaSemana, horaAbertura, horaFechamento, cnpj} = request.body;
        
        try{
            await connection('horarioFuncionamento').insert({
                diaSemana,
                horaAbertura,
                horaFechamento,
                cnpj
        })
            return response.json({diaSemana, horaAbertura, horaFechamento, cnpj});
        } catch{
            return response.json({error: 'erro'})
        }
    },

    async horarioFuncionamentoId(request, response){
        const { cnpj } = request.body;

        try{
            const horario = await connection('horarioFuncionamento')
            .select(
                'diaSemana',
                'horaAbertura',
                'horaFechamento'
            ).where('cnpj', cnpj)
            return response.json(horario);

        }catch{
            return response.json({error: 'erro'})
        }
    }
}