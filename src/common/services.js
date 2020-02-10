import * as firebase from 'firebase'

const InitFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyCsNCOv2ejlYGpy5Wu-NAt0avfiX6NA6Mc",
        authDomain: "splendor-game.firebaseapp.com",
        databaseURL: "https://splendor-game.firebaseio.com",
        projectId: "splendor-game",
        storageBucket: "splendor-game.appspot.com",
        messagingSenderId: "578820084529",
        appId: "1:578820084529:web:3ea16b923febcbb222d610"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
}

const TakeToken = (idToken) => {
    //leer suscripciones y ejecutar pasando parametros
}

const SusbribeTokenChange = (event) => {
    //leer suscripciones y ejecutar pasando parametros
}

const UnsuscribeTokenChange = (event) => {
    //leer suscripciones y ejecutar pasando parametros
}

const GetCardsPlayerBoard = (playerId, fn) => {
    const db = firebase.database();
    let player = db.ref('players/' + playerId);
    player.on('value', (snapshot)=>{
        if(snapshot.val())
            fn(snapshot.val());
    });
}

const AddCardToPlayerBoard = (cardId, playerId) => {
    const db = firebase.database();

    db.ref('players/' + playerId).once('value').then((snapshot)=>{
        let playerStatus = snapshot.val() || {cards:[], tokens:[]};
        playerStatus.cards.push(cardId);
        db.ref('players/' + playerId).set(playerStatus);
    });
}

export default {
    TakeToken,
    SusbribeTokenChange,
    UnsuscribeTokenChange,
    AddCardToPlayerBoard,
    InitFirebase,
    GetCardsPlayerBoard
}