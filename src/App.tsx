import { useState } from "react";
import "./App.css";
import { shuffle, buildDeck, dealRoom } from "./game/Deck";
import { fightMonster, takePotion, takeWeapon } from "./game/actions";
import type { Card, Deck, GameState } from "./types";
import PlayingCard from "./components/PlayingCard";

function App() {
  const initDeck = shuffle(buildDeck());
  const { room: initRoom, remaining: initRemaining } = dealRoom(initDeck);

  const [gameState, setGameState] = useState<GameState>({
    deck: initRemaining,
    hp: 20,
    maxHp: 20,
    weapon: null,
    lastRoomSkipped: false,
    room: initRoom,
    usedCards: [],
  });

  const isUsed = (card: Card) =>
    gameState.usedCards.some(
      (u) => u.suit === card.suit && u.value === card.value,
    );

  const handleCardClick = (card: Card) => {
    if (card.suit === "Clubs" || card.suit === "Spades") {
      setGameState(fightMonster(gameState, card));
    } else if (card.suit === "Hearts") {
      setGameState(takePotion(gameState, card));
    } else if (card.suit === "Diamonds") {
      setGameState(takeWeapon(gameState, card));
    }
  };

  return (
    <>
      <p>Cards in dungeon: {gameState.deck.cards.length}</p>
      <p>
        HP: {gameState.hp} / {gameState.maxHp}
      </p>
      <p>
        Weapon:{" "}
        {gameState.weapon
          ? `${gameState.weapon.card.value} of ${gameState.weapon.card.suit}`
          : "None"}
      </p>
      <p>
        Last Monster Defeated by Weapon:{" "}
        {gameState.weapon?.lastMonster ?? "None"}
      </p>
      <ul className="room">
        {gameState.room.map((card) => (
          <li key={`${card.suit}-${card.value}`}>
            <PlayingCard
              card={card}
              used={isUsed(card)}
              onClick={() => handleCardClick(card)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
