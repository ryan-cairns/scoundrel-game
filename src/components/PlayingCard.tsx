import type { Card } from "../types";
import "../styles/PlayingCard.css";

interface Props {
  card: Card;
}

function PlayingCard({ card }: Props) {
  const isRed = card.colour === "Red";
  return (
    <div className={`playing-card ${isRed ? "red" : "black"}`}>
      <div className="playing-card-corner top-left">
        <span className="playing-card-value">{card.value}</span>
        <span className="playing-card-symbol">{card.symbol}</span>
      </div>
      <div className="playing-card-centre">
        <span className="playing-card-symbol centre">{card.symbol}</span>
      </div>
      <div className="playing-card-corner bottom-right">
        <span className="playing-card-value">{card.value}</span>
        <span className="playing-card-symbol">{card.symbol}</span>
      </div>
    </div>
  );
}

export default PlayingCard;
