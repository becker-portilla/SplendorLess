import Cards from './cards';

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
function shuffle (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

function GetToken(idToken){
	return Cards.Tokens.filter(x=>x.id === idToken)[0];
}

function GetCard(idCard){
	return Cards.Cards.filter(x=>x.id === idCard)[0];
}

function GetNoble(idNoble){
	return Cards.Nobles.filter(x=>x.id === idNoble)[0];
}

function GetNobles(qty){
	let cards = Cards.Nobles.map(x=>x.id);
	shuffle(cards);
	return cards.slice(0, qty);
}

function GetTokens(){
	return Cards.Tokens;
}

function GetCardsByLevel(level){
	let cardsStorage = GetCardsFromStorage(level);
	if(cardsStorage)
		return cardsStorage;

	let cards = Cards.Cards.filter(x=>x.level === level).map(x=>x.id);
	shuffle(cards);

	return cards;
}

function SaveCardsByLevel(cards, level){
	sessionStorage.setItem('hiddenCards_' + level, JSON.stringify(cards));
}

function GetCardsFromStorage(level){
	let cards = sessionStorage.getItem('hiddenCards_' + level)
	if(cards)
		return JSON.parse(cards);
}

function IsDummyCard(idCard){
	return idCard === -1;
}

function GetDummyCard(){
	return -1;
}

function GetNewBoardCode(length){
	let text = "";
	length = length || 5;
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function GetNewEmptyBoard(code){
	return {
		code: code,
		players: []
	}
}

export default {
	shuffle, 
	GetCard, 
	GetCardsByLevel, 
	SaveCardsByLevel, 
	IsDummyCard, 
	GetDummyCard, 
	GetNoble, 
	GetNobles, 
	GetToken, 
	GetTokens,
	GetNewBoardCode,
	GetNewEmptyBoard
}