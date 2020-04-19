const express = require('express');
const loginController = require('./controllers/loginController');
const emailController = require('./controllers/emailController')
const agendamentoController = require('./controllers/agendamentoController')
const hospitalController = require('./controllers/hospitalController')
const sessionController = require('./controllers/sessionController')
const equipamentoController = require('./controllers/equipamentoController')
const horarioFuncionamentoController = require('./controllers/horarioFuncionamentoController')
const responsavelTecnicoController = require('./controllers/responsavelTecnicoController')

const routes = express.Router();


routes.get('/agendamentosId', agendamentoController.agendamentosId);
routes.get('/hospital', hospitalController.hospitalLoad);
routes.get('/login', sessionController.create);
routes.get('/equipamentoId', equipamentoController.equipamentoId);
routes.get('/horariofuncionamentoid', horarioFuncionamentoController.horarioFuncionamentoId);
routes.get('/filaespera', agendamentoController.filaEspera);
routes.get('/responsavelTecnico', responsavelTecnicoController.responsavelTecnicoId);

routes.post('/sendmail', emailController.forgotPassword);
routes.post('/agendamento/new', agendamentoController.novoAgendamento);
routes.post('/password', loginController.newPassord);
routes.post('/hospital/new', loginController.createHospital);
routes.post('/usuario/new', loginController.createUsuario);
routes.post('/equipamento/new', equipamentoController.criarEquipamento);
routes.post('/horariofuncionamento', horarioFuncionamentoController.horarioFuncionamentoAdd);
routes.post('/atendido', agendamentoController.atendido);
routes.post('/responsavelTecnico/new', responsavelTecnicoController.criarResponsavelTecnico);


module.exports = routes