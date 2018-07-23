class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    console.log('///');
    
    console.log(gameState); 
    console.log(gameState.players[0].hole_cards[0].suit);
    if (gameState.players.players[0].hole_cards[0].suit == gameState.players[0].hole_cards[1].suit) {
      bet(2);
    }else{
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
