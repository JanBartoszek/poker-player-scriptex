class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    console.log('///------------------------------------------------------!!!!!!!');
    var winningCards = ['A', 'K', 'Q', 'J']
    console.log(gameState); 
    console.log(gameState.players[0].hole_cards[0].rank);
    console.log(gameState.players[0].hole_cards[1].rank);
    try:{
      console.log(gameState.community_cards[0].rank + 'CARD COMMUNITY');
      console.log(gameState.community_cards[1].rank + 'CARD COMMUNITY');
      console.log(gameState.community_cards[2].rank + 'CARD COMMUNITY');}
      catch (err) {
        console.log(err + 'ERRROR!!!');};

    // gameState.community_cards.forEach(element => {console.log(gameState.community_cards[element].rank)});
    // if (gameState.players[0].hole_cards[0].rank == gameState.players[0].hole_cards[1].rank||gameState.community_cards.forEach(element => {gameState.community_cards[element].rank==gameState.players[0].hole_cards[0].rank})||gameState.community_cards.forEach(element => {gameState.community_cards[element].rank==gameState.players[0].hole_cards[0].rank}))
      
    // {
    //   bet(1000);
    // }else{
    //   bet(250);
    // }
    // console.log(gameState.players[0].hole_cards[0].suit);
    var potValue = gameState.pot;
    console.log(potValue + ' !!!!!VVVVVVVALUEPOT')
    try {
      var firstCard = gameState.players[0].hole_cards[0].rank;
      var secondCard = gameState.players[0].hole_cards[1].rank;
      console.log(firstCard);
      console.log(secondCard);
      
      if (winningCards.includes(firstCard) || winningCards.includes(secondCard)) {
        console.log('entered first if');
        bet(potValue + 10);

      } else if (firstCard == secondCard) {
        console.log('entered second if');
        bet(potValue + 10);

      } else {
        console.log('entered else');
        bet(0);
      }
    }
    catch (err) {
      console.log(err + 'ERRROR!!!');
      bet(potValue + 10);
    }
      
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
