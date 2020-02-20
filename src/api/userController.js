'use strict';

const Users = require('./users.js');

const list = async (request, reply) => {
	return reply.response(Users).code(200);
}

const getUser = async (request, reply) => {
	
	const { id } = request.params;

	if(isNaN(id))
		return reply.response("Id não é um numero").code(400)
	if(!Users[id-1])
		return reply.response("Usuario não encontrado").code(404)

	return reply.response(Users[id-1]).code(200);
}

const createUser = async (request, reply) => {
	const { nome, idade, endereco, tel } = request.payload;

	return reply.response(`Usuário ${nome} criado.`);
}

const updateUser = async (request, reply) => {
	const { id, nome, idade, endereco, tel } = request.payload;

	return reply.response(`Usuário ${nome} atualizado.`);
}

const deleteUser = async (request, reply) => {
	const { id } = request.query;

	if(isNaN(id))
		return reply.response("Id não é um numero").code(400)
	if(!Users[id-1])
		return reply.response("Usuario não encontrado").code(404)

	return reply.response(`Usuário ${Users[id-1].nome} Excluido.`);
}

const enderecoUser = async (request, reply) => {
	const { id } = request.params;

	if(isNaN(id))
		return reply.response("Id não é um numero").code(400)
	if(!Users[id-1])
		return reply.response("Usuario não encontrado").code(404)

	return reply.response(`Endereço do usuário ${Users[id-1].nome}: ${Users[id-1].endereco}`)
}

module.exports = {
	list,
	getUser,
	createUser,
	updateUser,
	deleteUser,
	enderecoUser
};