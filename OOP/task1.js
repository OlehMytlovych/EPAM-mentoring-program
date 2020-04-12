class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  get isFaceCard() {
    return this.rank === 1 || this.rank > 10;
  }

  toString() {
    const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

    return `${faces[this.rank]} of ${this.suit}`;
  }

  static compare(cardsOne, cardsTwo) {
    console.log(`${cardsOne} vs ${cardsTwo}`);
    const cardsOneSum = cardsOne.reduce((a, b) => a + b, 0);
    const cardsTwoSum = cardsTwo.reduce((a, b) => a + b, 0);
    if (cardsOneSum === cardsTwoSum) return null;

    return cardsOneSum > cardsTwoSum;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

    for (let suit = 0; suit < suits.length; suit += 1) {
      for (let rank = 1; rank <= 13; rank += 1) {
        this.cards.push(new Card(rank, suits[suit]));
      }
    }
  }

  get count() {
    return this.cards.length;
  }

  shuffle() {
    const giveRandom = () => Math.floor(Math.random() * this.count);

    this.cards.forEach((currentCard, index, cards) => {
      const randomCardIndex = giveRandom();
      const randomCard = cards[randomCardIndex];

      this.cards[index] = randomCard;
      this.cards[randomCardIndex] = currentCard;
    });

    return this;
  }

  draw(n) {
    const indexRevomeFrom = this.count - n;
    if (indexRevomeFrom >= 0) {
      return this.cards.splice(indexRevomeFrom, n);
    }

    return this.cards.splice(0, this.cards.count - 1);
  }
}

class Player {
  constructor(name) {
    this.name = name;
    let wins = 0;

    this.getWins = () => wins;
    this.addWin = () => { wins += 1; };
  }

  get wins() {
    return this.getWins();
  }

  static Play(playerOne, playerTwo, drawNum = 1) {
    const playerOneDeck = new Deck().shuffle();
    const playerTwoDeck = new Deck().shuffle();

    console.log(`${playerOne.name} is playing against ${playerTwo.name}`);
    while (playerOneDeck.count) {
      const playerOneWon = Card.compare(playerOneDeck.draw(drawNum), playerTwoDeck.draw(drawNum));

      if (playerOneWon === true) playerOne.addWin();
      if (playerOneWon === false) playerTwo.addWin();
    }

    const playerOneWins = playerOne.wins;
    const playerTwoWins = playerTwo.wins;

    if (playerOneWins === playerTwoWins) {
      return '*** It`s a tie, ladies and gentlemen! ***';
    }

    if (playerOneWins > playerTwoWins) {
      return `*** ${playerOne.name} wins ${playerOneWins} to ${playerTwoWins} ***`;
    }

    return `*** ${playerTwo.name} wins ${playerTwoWins} to ${playerOneWins} ***`;
  }
}

console.log(Player.Play(new Player('Tiotia'), new Player('Motia'), 2));
