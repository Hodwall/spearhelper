import Card from "../Card/Card";
import tactics_set_2 from "../../data/tactics_set_2.json";
import tactics_card_bg_img from "../../assets/celestial_motif.png";
import "./TacticsCards.css";
import useTranslations from "../../hooks/useTranslations";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";

type TacticsCardI = {
  tactic_name: string;
  tactic_description: string;
  tactic_conditions: string[];
  command_phase:
    | "start"
    | "hero"
    | "movement"
    | "shooting"
    | "charge"
    | "combat"
    | "end"
    | "reaction";
  command_title: string;
  command_name: string;
  command_description: string;
  command_steps: {
    step_name: string;
    step_description: string;
  }[];
};

const TacticsCards = () => {
  const ctx = useContext(AppContext);
  const translate = useTranslations();
  const cards_set: TacticsCardI[] = tactics_set_2 as TacticsCardI[];

  const [cardsActive, setCardsActive] = useState<(TacticsCardI | null)[]>([
    null,
    null,
    null,
  ]);
  const [cardsDiscarded, setCardsDiscarded] = useState<TacticsCardI[]>([]);
  const [cardsDeck, setCardsDeck] = useState<TacticsCardI[]>([...cards_set]);

  useEffect(() => {
    setCardsActive([null, null, null]);
    setCardsDiscarded([]);
    setCardsDeck([...cards_set]);
  }, [ctx.spearhead_set]);

  const handleDrawCard = () => {
    if (!cardsActive.some((card) => !card)) return;

    const random_index = Math.floor(Math.random() * cardsDeck.length);
    const random_card: TacticsCardI = { ...cardsDeck[random_index] };

    setCardsDeck((prev) => {
      const cards = [...prev];
      cards.splice(random_index, 1);
      return cards;
    });

    if (cardsDeck.length === 1) handleReshuffle();

    setCardsActive((prev) => {
      const cards = [...prev];
      for (let i = 0; i < 3; i++) {
        if (cards[i] === null) {
          cards[i] = random_card;
          break;
        }
      }
      return cards;
    });
  };

  const handleDiscard = (index: number) => {
    setCardsDiscarded([...cardsDiscarded, cardsActive[index] as TacticsCardI]);
    setCardsActive((prev) => {
      const cards = [...prev];
      cards[index] = null;
      return cards;
    });
  };

  const handleReshuffle = () => {
    setCardsDeck([...cardsDiscarded]);
    setCardsDiscarded([]);
  };

  return (
    <div className="TacticsCards">
      <div className="app-text__title">{translate("tactics_cards")}</div>
      <div className="tactics-cards__board">
        {cardsActive.map((card, index) =>
          card ? (
            <Card>
              <div className="card__header"></div>
              <div className="card__title">
                · {translate("battle_tactic")} ·
              </div>
              <div className="card__content">
                <b>{translate(card.tactic_name)}</b>:{" "}
                <i>{translate(card.tactic_description)}</i>
                {card.tactic_conditions.map((condition, index) => (
                  <>
                    <p>{translate(condition)}</p>
                    {index < card.tactic_conditions.length - 1 && (
                      <div className="card__content--joiner">
                        {translate("and")}
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="card__title">· {translate("command")} ·</div>
              <div className="card__command">
                <div className={`card__command--title ${card.command_phase}`}>
                  {translate(card.command_title)}
                </div>
                <div className="card__command--text">
                  <b>{translate(card.command_name)}</b>:{" "}
                  <i>{translate(card.command_description)}</i>
                  {card.command_steps.map((step) => (
                    <p>
                      <b>{translate(step.step_name)}</b>:{" "}
                      <span>{translate(step.step_description)}</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="card__tools">
                <span onClick={() => handleDiscard(index)}>
                  {translate("discard")}
                </span>
              </div>
            </Card>
          ) : (
            <Card />
          )
        )}
        <Card className="tactics-card" onClick={handleDrawCard}>
          <div className="tactics-card__label">{translate("tactics")}</div>
          <div className="tactics-card__bg">
            <img
              className="tactics-card__bg--image"
              src={tactics_card_bg_img}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TacticsCards;
