'use strict';

const userController = require('./api/userController');
const userRoutes = [
	{
		method: "GET",
		path: "/user/list",
		handler: userController.list,
		options: {
			description: "Lists all users"
		}
	},
	{
		method: 'GET',
		path: `/user/{id}`,
		handler: userController.getUser,
        options: {
            description: 'Get an user'
        }
	},
	{
		method: 'POST',
		path: `/user`,
		handler: userController.createUser,
		options: {
			description: "Create a new user"
		}
	},
	{
		method: 'PUT',
		path: `/user`,
		handler: userController.updateUser,
		options: {
			description: "Updates a new user"
		}
	},
	{
		method: 'DELETE',
		path: `/user`,
		handler: userController.deleteUser,
		options: {
			description: "Deletes a new user"
		}
	},
	{
		method: 'GET',
		path: `/user/{id}/endereco`,
		handler: userController.enderecoUser,
		options: {
			description: "Get an user address"
		}
	}
];

const gameController = require('./api/gameController');
const gameRoutes = [
	{
		method: "GET",
		path: "/game/list",
		handler: gameController.list,
		options: {
			description: "Lists all games"
		}
	},
	{
		method: "GET",
		path: "/game/{id}",
		handler: gameController.getGame,
		options: {
			description: "Get a game"
		}
	},
	{
		method: "POST",
		path: "/game",
		handler: gameController.createGame,
		options: {
			description: "create a game"
		}
	},
	{
		method: "PUT",
		path: "/game",
		handler: gameController.updateGame,
		options: {
			description: "Update a game"
		}
	},
	{
		method: "DELETE",
		path: "/game",
		handler: gameController.deleteGame,
		options: {
			description: "Delete a game"
		}
	},
]

module.exports = [
	...userRoutes,
	...gameRoutes
];