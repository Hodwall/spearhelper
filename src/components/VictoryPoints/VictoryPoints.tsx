import { useState } from "react";
import "./VictoryPoints.css";


const VictoryPoints = () => {
  const [points, setPoints] = useState(0);

  return (
    <div className="VictoryPoints">
      <div className="app-text__title">Victory Points</div>
      <div className="victory-points__counter">
        <button onClick={() => setPoints(points - 1)}>-</button>
        <input 
          type="number"
          value={points}
          pattern="[0-9]*"
          style={{ WebkitAppearance: 'none', MozAppearance: 'textfield', appearance: 'textfield' }}
          onKeyDown={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(e) => setPoints(Number(e.target.value))}
        />
        <button onClick={() => setPoints(points + 1)}>+</button>
      </div>
    </div>
  )
}

export default VictoryPoints;