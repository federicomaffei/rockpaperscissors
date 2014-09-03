$(document).ready(function(){
	var p1 = new Player('Johann');
	var p2 = new Player('Federico');
	var selection = ['lizard', 'spock', 'rock', 'paper', 'scissors'];
	var game = new Game(p1, p2);

	$('.choices img').on('click', function(){
		p1.picks($(this).data('pick'));
		p2.picks(selection[Math.floor(Math.random()*selection.length)]);

		$('<li>' + game.victory_message(game) + '</li>').prependTo('#results').slideDown();
		$('li:gt(4)').fadeOut(function() {
			$(this).remove();
		});
	});
});