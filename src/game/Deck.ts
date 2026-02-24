import type {
  Card,
  Deck,
  Suit,
  CardValue,
  CardColour,
  CardSymbol,
} from "../types";

const SUITS: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];

const VALUES: CardValue[] = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
  "Ace",
];

const COLOUR_MAP: Record<Suit, CardColour> = {
  Hearts: "Red",
  Diamonds: "Red",
  Clubs: "Black",
  Spades: "Black",
};

const SYMBOL_MAP: Record<Suit, CardSymbol> = {
  Hearts: "♥",
  Diamonds: "♦",
  Clubs: "♣",
  Spades: "♠",
};

export function buildDeck(): Deck {
  const cards: Card[] = [];

  SUITS.forEach((suit, suitIndex) => {
    VALUES.forEach((value, valueIndex) => {
      // exclude red face cards (Jack, Queen, King, Ace of Hearts & Diamonds)
      if (!(suitIndex < 2 && valueIndex > 8)) {
        cards.push({
          suit,
          value,
          colour: COLOUR_MAP[suit],
          symbol: SYMBOL_MAP[suit],
        });
      }
    });
  });

  return { cards };
}

export function shuffle(deck: Deck): Deck {
  const cards = [...deck.cards];
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return { cards };
}

export function dealRoom(deck: Deck): { room: Card[]; remaining: Deck } {
  const cards = [...deck.cards];
  const room = cards.splice(cards.length - 4, 4);
  return {
    room,
    remaining: { cards },
  };
}
