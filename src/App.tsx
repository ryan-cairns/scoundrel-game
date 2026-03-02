import { useState } from "react";
import "./App.css";
import { shuffle, buildDeck, dealRoom } from "./game/Deck";
import type { Card, Deck } from "./types";
import PlayingCard from "./components/PlayingCard";

function App() {
  const initDeck = shuffle(buildDeck());
  const { room: initRoom, remaining: initRemaining } = dealRoom(initDeck);

  const [deck, setDeck] = useState<Deck>(initRemaining);
  const [room, setRoom] = useState<Card[]>(initRoom);

  return (
    <>
      <p>Cards in dungeon: {deck.cards.length}</p>
      <p>Cards in room:</p>
      <ul>
        {room.map((card, index) => (
          <li>
            <PlayingCard key={index} card={card} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
