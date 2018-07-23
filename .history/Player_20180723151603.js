class Player {
  static get VERSION() {
    return '0.1';
  }
  
  static betRequest(gameState, bet) {
    console.log('///------------------------------------------------------!!!!!!!');
    var winningCards = ['A', 'K', 'Q', 'J'];
    console.log(gameState); 
    console.log(gameState.players[0].hole_cards[0].rank);
    console.log(gameState.players[0].hole_cards[1].rank);
    try{
      console.log(gameState.community_cards[0].rank + 'CARD COMMUNITY');
      console.log(gameState.community_cards[1].rank + 'CARD COMMUNITY');
      console.log(gameState.community_cards[2].rank + 'CARD COMMUNITY');
    } catch (err) {
        console.log(err + 'ERRROR!!!');
    };

    
    var potValue = gameState.pot;
    console.log(potValue + ' !!!!!VVVVVVVALUEPOT');
    
    var firstCard = gameState.players[0].hole_cards[0].rank;
    var secondCard = gameState.players[0].hole_cards[1].rank;
    console.log(firstCard);
    console.log(secondCard);
    try{  
      if (winningCards.includes(firstCard) || winningCards.includes(secondCard)) {
        console.log('entered first if');
        bet(Math.round(potValue / 2));
        console.log(bet + ' We bet')

      } else if (firstCard == secondCard) {
        console.log('entered second if');
        bet(6000);
        console.log(bet + ' We bet')

      } else {
        console.log('entered else');
        bet(0);
        console.log(bet + ' We bet')
      }
    }
    catch (err) {
      console.log(err + 'ERRROR!!!');
      bet(6000);
      console.log(bet + ' We bet');
    }
  }

  static showdown(gameState) {
  }
}

module.exports = Player;
