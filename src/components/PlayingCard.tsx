import type { Card } from "../types";
import "../styles/PlayingCard.css";

interface Props {
  card: Card;
  used?: boolean;
  onClick?: () => void;
}

function PlayingCard({ card, used, onClick }: Props) {
  const isRed = card.colour === "Red";

  const handleClick = () => {
    if (used) return;
    if (onClick) onClick();
  };

  return (
    <div
      className={`playing-card ${isRed ? "red" : "black"} ${used ? "used" : ""}`}
      onClick={handleClick}
    >
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
