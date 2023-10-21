'use strict';

const games = require('../controllers/games.js');

module.exports = [
	{
		url: '/api/games/freetoplay',
		method: 'get',
		func: games.getFreeToPlayGames
	},
	{
		url: '/api/games/mostrecents',
		method: 'get',
		func: games.getMostRecentsGames
	},
	{
		url: '/api/games/underprice/:price',
		method: 'get',
		func: games.getGamesUnderPrice
	},
	{
		url: '/api/games',
		method: 'get',
		func: games.getAllGames
	},
  	{
		url: '/api/games/:game_id',
		method: 'get',
		func: games.getGameById
	}
];
