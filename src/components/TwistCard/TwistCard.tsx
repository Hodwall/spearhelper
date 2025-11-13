import useTranslations from "../../hooks/useTranslations";
import Card from "../Card/Card";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import twists_aqshy from "../../data/twists_ossia.json";
import twists_ghyran from "../../data/twists_ossia.json";
import twists_ossia from "../../data/twists_ossia.json";
import twists_dolorum from "../../data/twists_ossia.json";
import "./TwistCard.css";

interface TwistCardI {
  name: string;
  description: string;
  content: {
    name?: string;
    description: string;
  }[];
}

const board_options: { [key: number]: string[] } = {
  1: ["aqshy", "ghyran"],
  2: ["ossia", "dolorum"],
};

const board_twists: { [key: string]: TwistCardI[] } = {
  aqshy: twists_aqshy,
  ghyran: twists_ghyran,
  ossia: twists_ossia,
  dolorum: twists_dolorum,
};

const TwistCard = () => {
  const ctx = useContext(AppContext);

  const [activeBoard, setActiveBoard] = useState<string>(
    board_options[ctx.spearhead_set][0]
  );
  const [cardsDeck, setCardsDeck] = useState<TwistCardI[]>(
    board_twists[activeBoard]
  );
  const [activeCard, setActiveCard] = useState<TwistCardI | null>(null);

  const handleDrawCard = () => {
    const random_index = Math.floor(Math.random() * cardsDeck.length);
    const random_card: TwistCardI = { ...cardsDeck[random_index] };

    setCardsDeck((prev) => {
      if (prev.length === 1) {
        return board_twists[activeBoard];
      } else {
        const cards = [...prev];
        cards.splice(random_index, 1);
        return cards;
      }
    });

    setActiveCard(random_card);
  };

  useEffect(() => {
    setActiveBoard(board_options[ctx.spearhead_set][0]);
  }, [ctx.spearhead_set]);

  useEffect(() => {
    setCardsDeck(board_twists[activeBoard]);
    setActiveCard(null);
  }, [activeBoard]);

  const translate = useTranslations();
  return (
    <div className="TwistCard">
      <div className="app-text__title">{translate("twist_card")}</div>
      <div className="twist__board-selector">
        {board_options[ctx.spearhead_set].map((board) => (
          <div
            className={`twist__board ${board} ${
              activeBoard === board ? "active" : ""
            }`}
            onClick={() => setActiveBoard(board)}
          >
            {board}
          </div>
        ))}
      </div>
      <Card
        className={`twist__card ${!activeCard ? "empty" : ""} ${activeBoard}`}
      >
        <>
          {activeCard && (
            <>
              <div className="card__header"></div>
              <div className="card__title">· {translate("twist_card")} ·</div>
              <div className="card__content">
                <b>{translate(activeCard.name)}</b>:{" "}
                <i>{translate(activeCard.description)}</i>
                {activeCard.content.map((content) => (
                  <>
                    <p>
                      {content.name && <b>{translate(content.name)}: </b>}
                      {translate(content.description)}
                    </p>
                  </>
                ))}
              </div>
            </>
          )}
          <div className="card__tools">
            <div onClick={handleDrawCard}>{translate("draw")}</div>
          </div>
        </>
      </Card>
    </div>
  );
};

export default TwistCard;
