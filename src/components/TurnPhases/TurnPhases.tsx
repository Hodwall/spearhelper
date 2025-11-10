import useTranslations from "../../hooks/useTranslations";
import "./TurnPhases.css";


const TurnPhases = () => {
  const translate = useTranslations("es");

  return (
    <div className="TurnPhases">
      <div className="app-text__title">{translate("turn_phases")}</div>
      <div className="turn-phases__chart">
        <div>START OF TURN</div>
        <div>HERO PHASE</div>
        <div>MOVEMENT PHASE</div>
        <div>SHOOTING PHASE</div>
        <div>CHARGE PHASE</div>
        <div>COMBAT PHASE</div>
        <div>END OF TURN</div>
      </div>
    </div>
  )
}

export default TurnPhases;