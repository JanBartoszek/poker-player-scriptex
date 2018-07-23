class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    state=JSON.parse(gameState); 
    console.log('///')
    console.log(state); 
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
