class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    console.log('///');
    
    console.log(gameState); 
    
    if (gameState.players.Scriptex.hole_cards[0].suit == gameState.players.Scriptex.hole_cards[1].suit) {
      bet(4);
    }else{
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
