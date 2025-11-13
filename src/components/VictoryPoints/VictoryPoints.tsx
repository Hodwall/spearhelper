import { useState } from "react";
import "./VictoryPoints.css";
import useTranslations from "../../hooks/useTranslations";
import input_border from "../../assets/border_round.png";

const VictoryPoints = () => {
  const [points, setPoints] = useState(0);
  const translate = useTranslations();

  return (
    <div className="VictoryPoints">
      <div className="app-text__title">{translate("victory_points")}</div>
      <div className="victory-points__counter">
        <button onClick={() => setPoints(points - 1)}>-</button>
        {/* <button onClick={() => setPoints(points + 1)}>RESET</button> */}
        <div className="victory-points__input">
          <input
            type="number"
            value={points}
            pattern="[0-9]*"
            style={{
              WebkitAppearance: "none",
              MozAppearance: "textfield",
              appearance: "textfield",
            }}
            onKeyDown={(event) => {
              if (
                !/[0-9]/.test(event.key) &&
                event.key !== "Backspace" &&
                event.key !== "Delete"
              ) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
          <img src={input_border} />
        </div>
        <button onClick={() => setPoints(points + 1)}>+</button>
      </div>
    </div>
  );
};

export default VictoryPoints;
