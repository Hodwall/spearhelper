import useTranslations from "../../hooks/useTranslations";
import "./TurnPhases.css";

const TurnPhases = () => {
  const translate = useTranslations();

  return (
    <div className="TurnPhases">
      <div className="app-text__title">{translate("turn_phases")}</div>
      <div className="turn-phases__chart">
        <div>{translate("turn_phase_start")}</div>
        <div>{translate("turn_phase_hero")}</div>
        <div>{translate("turn_phase_movement")}</div>
        <div>{translate("turn_phase_shooting")}</div>
        <div>{translate("turn_phase_charge")}</div>
        <div>{translate("turn_phase_combat")}</div>
        <div>{translate("turn_phase_end")}</div>
      </div>
    </div>
  );
};

export default TurnPhases;
