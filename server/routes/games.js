'use strict';

const games = require('../controllers/games.js');

module.exports = [
	{
		url: '/games',
		method: 'get',
		func: games.getAllGames
	},
  {
		url: '/games/:game_id',
		method: 'get',
		func: games.getGameById
	}
];
