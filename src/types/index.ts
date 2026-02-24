export type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades";

export type CardValue =
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "Jack"
  | "Queen"
  | "King"
  | "Ace";

export type CardColour = "Red" | "Black";

export type CardSymbol = "♥" | "♦" | "♣" | "♠";

export interface Card {
  suit: Suit;
  value: CardValue;
  colour: CardColour;
  symbol: CardSymbol;
}

export interface Deck {
  cards: Card[];
}

export interface Weapon {
  card: Card;
  lastMonster: number;
}

export interface GameState {
  deck: Deck;
  hp: number;
  maxHp: number;
  weapon: Weapon | null;
  lastRoomSkipped: boolean;
  room: Card[];
}
