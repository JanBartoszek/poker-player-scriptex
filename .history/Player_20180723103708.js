class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    if (JSON.parse(game_state).players.Scriptex.hole_cards[0].suit = JSON.parse(game_state).players.Scriptex.hole_cards[1].suit) {
      bet(2);
    }else{
      bet(0);
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
