class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    console.log('///');
    
    console.log(gameState); 
    console.log(gameState.players[0].hole_cards[0].rank);
    console.log(gameState.community_cards)
    gameState.community_cards.forEach(element => {console.log(gameState.community_cards[element].rank)});
    if (gameState.players[0].hole_cards[0].rank == gameState.players[0].hole_cards[1].rank||gameState.community_cards.forEach(element => {gameState.community_cards[element].rank==gameState.players[0].hole_cards[0].rank})||gameState.community_cards.forEach(element => {gameState.community_cards[element].rank==gameState.players[0].hole_cards[0].rank}))
      
    {
      bet(1000);
    }else{
      bet(250);
    }
    console.log(gameState.players[0].hole_cards[0].suit);
    bet(2000);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
