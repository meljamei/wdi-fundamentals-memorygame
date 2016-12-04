console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var board =document.getElementById('game-board');

function createBoard() {
	for (var i = 0; i < cards.length; i++) {

		var cardElement = document.createElement('div');

		cardElement.className = 'card';
	
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);

		board.appendChild(cardElement);

}

function isMatch(cards) {
		if (card[0]===card[1]) {

 		alert('You have found a match!');
 	}

 	else {

 		alert('Sorry, try again.');
 	}


}


function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));
	
	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'king') {

		this.innerHTML = "<img src='playing-card-161495_1280.png' alt="King of Spades"/>"; 
	} else {
		this.innerHTML = "<img src='playing-card-161494_1280.png' alt="Queen of Spades">"; 
	}



	 if (cardsInPlay.length === 2){

	 	 isMatch(cardsInPlay);
	 	 cardsInPlay = [];




	 }


}
createBoard();











 

 

 function createBoard() {

 	for (var i=0; i<cards.length; i++) {

 		
 		
 		
 			

 	}
 }
