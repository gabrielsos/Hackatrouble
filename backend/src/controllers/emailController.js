const connection = require('../database/connection');
const generatePassword = require('../utils/crypto')
const configuration = require('../../knexfile');
const Knex = require('knex');
const knex = Knex(configuration.development);

module.exports = {
    
    async forgotPassword(request, response){
        const mailer = require('nodemailer');
        const { email } = request.body
        
        const name = await connection('hospital')
        .select(
        knex.raw('nome as nome')
        )
        .where('email', email)
        .first();

        if(name != undefined){
            const password = generatePassword();
            
            await connection('hospital').update('senha', password).where('email', email)
	        await connection('hospital').update('passwordExpired', 1).where('email', email)

            const config = {
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: 'projetorose2019@gmail.com',
                    pass: 'projrose2019'
                }
            };
            const transporter = mailer.createTransport(config);
            const message = {
                from: 'projetorose2019@gmail.com',
                to: email,
                subject: 'Mudança de senha',
                text: `Olá ${name.nome}.
Sua nova senha é: ${password}`
            }
            transporter.sendMail(message, (error, info) => {
                if(error){
                    return response.status(500).send('falhou')
                }else{
                    return response.status(200).send('enviou')
                }
            })
            return response.json({ return: true });
        } else{
            return response.json({ return: false });
        }
            
    }
}