import "./Card.css";


const Card = () => {
  return (
    <div className="Card">
      <div className="card__header">LOGO</div>
      <div className="card__title">BATTLE TACTIC</div>
      <div className="card__content">
        MORBID CONSECRATION: Sanctify this ground with an offering of death.
      </div>
      <div className="card__title">COMMAND</div>
      <div className="card__command">
        <div className="card__command--title">HERO PHASE</div>
        <div className="card__command--text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
      </div>
    </div>
  )
}

export default Card;