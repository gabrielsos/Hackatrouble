const connection = require('../database/connection');
const currentDate = require('../utils/currentDate');
const Knex = require('knex');
const configuration = require('../../knexfile');

const knex = Knex(configuration.development);

module.exports = {

    async agendamentosId(request,response){

        const { cnpj } = request.body
        const agendamento = await connection('agendamento')
        .join('hospital', 'agendamento.cnpj', '=', 'hospital.cnpj')
        .join('usuario', 'agendamento.cpf', '=', 'usuario.cpf')
        .select(
            knex.raw(`date_format(agendamento.data, '%d/%m/%Y %T') as dataAgendamento`),
            'usuario.nome',
            'usuario.cpf',
            'usuario.rg',
            knex.raw(`date_format(usuario.dataNascimento, '%d/%m/%Y') as dataNascimento`),
            'usuario.endereço',
            'usuario.telefone',
            'usuario.celular',
            'usuario.carteirinha'

            )
        .where('agendamento.cnpj', cnpj)
        .first()
        return response.json(agendamento);
    },

    async filaEspera(request, response){
        const fila = await connection('agendamento')
        .count('cpf as totalFila')
        .where('atendido', '=', 'false')
        return response.json(fila[0].totalFila)
    },
    
    async atendido(request, response){
        const { cnpj, cpf } = request.body;
        try{
            await connection('agendamento')
            .update('atendido', true)
            .where('cnpj', cnpj)
            .where('cpf', cpf)

            return response.json({sucess: 'updated'});
        } catch{
            return response.json({error: 'failed updating'})
        }
    },

    async novoAgendamento(request, response){

        const { cnpj , cpf} = request.body
        const data = currentDate();
        const atendido = false
        try{
            await connection('agendamento').insert({
                data,
                atendido,
                cnpj,
                cpf
            })
        } catch{
            return response.json({error: 'erro'})
        }
        return response.json({data, atendido, cnpj, cpf});
    },
}