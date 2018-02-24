var suits, numbers, suitsBottom, i; 
var card ={
 suits: ["&#9830", "&#9829", "&#9824", "&#9827"],
 suitsBottom: ["&#9830", "&#9829", "&#9824", "&#9827"],
 numbers: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

};
if (suits === "&#9827 || >&#9824"){
	
} else if (suits === "&#9829 || &#9830"){
	
}

 
function pullNumber() {
	var theNumber = Math.floor(Math.random() * (card.numbers.length));
	document.getElementById('randomNumber').innerHTML = card.numbers[theNumber];
}

function pullBothSuits(){
	var allSuits = Math.floor(Math.random() * (card.suits.length));
	document.getElementById('topSuit').innerHTML = card.suits[allSuits];
	document.getElementById('bottomSuit').innerHTML = card.suits[allSuits];
}


window.wholeCard = function(){
	pullNumber();
	pullBothSuits();
	
};

