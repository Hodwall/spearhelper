import Card from "../Card/Card";
import "./TacticCards.css";


const TacticCards = () => {
  return (
    <div className="TacticCards">
      <div className="app-text__title">Tactics Cards</div>
      <div className="tactic-cards__board">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default TacticCards;