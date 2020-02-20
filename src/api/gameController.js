'use strict';

const Games = require('./games.js');

const list = async (request, reply) => {
	return reply.response(Games).code(200);
}

const getGame = async (request, reply) => {
	
	const { id } = request.params;

	if(isNaN(id))
		return reply.response("Id não é um numero").code(400)
	if(!Games[id-1])
		return reply.response("Jogo não encontrado").code(404)

	return reply.response(Games[id-1]).code(200);
}

const createGame = async (request, reply) => {
	const { id, nome, ano, console, genero } = request.payload;

	return reply.response(`Jogo ${nome} criado.`);
}

const updateGame = async (request, reply) => {
	const { id, nome, ano, console, genero } = request.payload;

	return reply.response(`Jogo ${nome} atualizado.`);
}

const deleteGame = async (request, reply) => {
	const { id } = request.query;

	if(isNaN(id))
		return reply.response("Id não é um numero").code(400)
	if(!Games[id-1])
		return reply.response("Jogo não encontrado").code(404)

	return reply.response(`Jogo ${Games[id-1].nome} Excluido.`);
}

module.exports = {
	list,
	getGame,
	createGame,
	updateGame,
	deleteGame
};