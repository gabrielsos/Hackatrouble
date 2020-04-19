const connection = require('../database/connection');
const currentDate = require('../utils/currentDate');
const Knex = require('knex');
const configuration = require('../../knexfile');

const knex = Knex(configuration.development);

module.exports = {

    async hospitalLoad(request,response){    

        const hospital = await connection('hospital')
        .select('*')

        return response.json(hospital);
    },
}