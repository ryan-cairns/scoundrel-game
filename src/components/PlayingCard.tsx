import type { Card } from "../types";

interface Props {
  card: Card;
}

function PlayingCard({ card }: Props) {
  return (
    <div className="card">
      <div className="card-corner top-left">
        <span className="card-value">{card.value}</span>
        <span className="card-symbol">{card.symbol}</span>
      </div>
      <div className="card-center">
        <span className="card-symbol">{card.symbol}</span>
      </div>
      <div className="card-corner bottom-right">
        <span className="card-value">{card.value}</span>
        <span className="card-symbol">{card.symbol}</span>
      </div>
    </div>
  );
}

export default PlayingCard;
