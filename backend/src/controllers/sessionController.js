const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {email, senha} = request.body;
        console.log(email, senha)
        const user = await connection('hospital')
        .where('email', email)
	    .where('senha', senha)
        .select(
            'email',
            'nome',
	        'passwordExpired'
        )
	    .first();
        if(!user){
            return response.status(400).json({ error: 'No logon foud with this ID or password'});

        } else {
        return response.json(user);
	}
    }
}