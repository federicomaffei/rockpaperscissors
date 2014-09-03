function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

Game.prototype.winner = function() {

	var Pairs = {
		rock: {beats: ['scissors', 'lizard']},
		paper: {beats: ['rock', 'spock']},
		scissors: {beats: ['paper', 'lizard']},
		lizard: {beats: ['spock', 'paper']},
		spock: {beats: ['scissors', 'rock']}
	};

	if(this.player1.pick === this.player2.pick) {
		return null
	}

	else if(Pairs[this.player1.pick]['beats'].indexOf(this.player2.pick) > -1){
		return this.player1;
	}

	else {
		return this.player2;
	}
};

Game.prototype.loser = function() {
	return this.winner() === this.player1 ? this.player2 : this.player1;
};

Game.prototype.victory_message = function(game) {

	var Verbs = {
		rock: {scissors: 'crushes', lizard: 'crushes'},
		paper: {rock: 'covers', spock: 'disproves'},
		scissors: {paper: 'cuts', lizard: 'decapitates'},
		lizard: {paper: 'eats', spock: 'poisons'},
		spock: {scissors: 'smashes', rock: 'vapourises'}
	};

	if(game.winner() === null) {
		return 'Draw.'
	}

	else {
		return game.winner().name + "'s " + game.winner().pick + " " + Verbs[game.winner().pick][game.loser().pick] + " " + game.loser().name + "'s " + game.loser().pick;
	}
};