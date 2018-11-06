'use strict';

var MyMorpionXO = function(){
var tds = document.querySelectorAll('td');
 this.currentPlayer = 'X';
 this.score = {
	X : 0,
	O : 0
}
var self = this;
tds.forEach(function(td){
td.addEventListener('click',function(){
self.turn(td);

});
})

}

MyMorpionXO.prototype.turn = function(td){
	if (td.innerHTML !== '') {
		return ; 
	}	
	td.innerHTML = this.currentPlayer;
	this.checkWin();
	if (this.checkNull()) {
		this.restGame();
	}

	// Switch turn
	if (this.currentPlayer == 'X') {
		this.currentPlayer = 'O';
	}
	else{
		this.currentPlayer = 'X';
	}

}

MyMorpionXO.prototype.checkWin = function(){
	var tds = document.querySelectorAll('td');

	var firstLine = (tds[0].innerHTML === this.currentPlayer && tds[1].innerHTML === this.currentPlayer && tds[2].innerHTML === this.currentPlayer);
	var secondLine = (tds[3].innerHTML === this.currentPlayer && tds[4].innerHTML === this.currentPlayer && tds[5].innerHTML === this.currentPlayer);
	var	thridLine = (tds[6].innerHTML === this.currentPlayer && tds[7].innerHTML === this.currentPlayer && tds[8].innerHTML === this.currentPlayer);
	var firstColumn = (tds[0].innerHTML === this.currentPlayer && tds[3].innerHTML === this.currentPlayer && tds[6].innerHTML === this.currentPlayer);
	var secondColumn = (tds[1].innerHTML === this.currentPlayer && tds[4].innerHTML === this.currentPlayer && tds[7].innerHTML=== this.currentPlayer);
	var thridColumn = (tds[2].innerHTML === this.currentPlayer && tds[5].innerHTML === this.currentPlayer && tds[8].innerHTML === this.currentPlayer);
	var firstDiag = (tds[0].innerHTML === this.currentPlayer && tds[4].innerHTML === this.currentPlayer && tds[8].innerHTML === this.currentPlayer);
	var secondDiag = (tds[2].innerHTML === this.currentPlayer && tds[4].innerHTML === this.currentPlayer && tds[6].innerHTML === this.currentPlayer);

	if (firstLine || secondLine || thridLine || firstColumn || secondColumn || thridColumn || firstDiag || secondDiag){
		console.log('gagnant');
		this.verifPlayerWin();
		this.restGame();

	}
}
MyMorpionXO.prototype.restGame = function(){
	var tds = document.querySelectorAll('td');

	tds.forEach(function(td){
			td.innerHTML = '';
		});
}
MyMorpionXO.prototype.verifPlayerWin = function(){
	this.score[this.currentPlayer] += 1;
		if (this.score[this.currentPlayer]==3){
			alert('le joueur'+ this.currentPlayer+' a gagné ');
			score.X = 0;
			score.O = 0;
		}
}
MyMorpionXO.prototype.checkNull = function(){
	// Need to be converted to regular array to be able to call every
	var tds = [].slice.call(document.querySelectorAll('td'));
	var isNull = tds.every(function(td){
		return td.innerHTML !== '';
	})
	return isNull;
}
var game = new MyMorpionXO();

