import "./App.css";
import TurnPhases from "./components/TurnPhases/TurnPhases";
import Footer from "./components/Footer/Footer";
import VictoryPoints from "./components/VictoryPoints/VictoryPoints";
import bg_image from "./assets/bg_image_2.jpg";
import TacticCards from "./components/TacticsCards/TacticsCards";
import TwistCard from "./components/TwistCard/TwistCard";
import { createContext, useState } from "react";

type ContextData = {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
  spearhead_set: number;
  setSpearheadSet: (set: number) => void;
};

export const AppContext = createContext<ContextData>({
  lang: "es",
  setLang: () => {},
  spearhead_set: 1,
  setSpearheadSet: () => {},
});

function App() {
  const [lang, setLang] = useState<ContextData["lang"]>("es");
  const [spearhead_set, setSpearheadSet] = useState(1);

  return (
    <div className="App">
      <AppContext.Provider
        value={{
          lang: lang,
          setLang: setLang,
          spearhead_set: spearhead_set,
          setSpearheadSet: setSpearheadSet,
        }}
      >
        <div className="app-content">
          <div className="app-content__top-left" />
          <div className="app-content__top" />
          <div className="app-content__top-right" />
          <div className="app-content__left" />
          <div className="app-content__center">
            <div className="app-content__center--sidebar">
              <TwistCard />
            </div>
            <div className="app-content__center--main">
              <div className="app-content__center--top">
                <TurnPhases />
                <VictoryPoints />
              </div>
              <TacticCards />
            </div>
          </div>
          <div className="app-content__right"></div>
          <div className="app-content__bottom-left"></div>
          <div className="app-content__bottom">
            <div className="app-content__bottom--center"></div>
            <div className="app-content__bottom--decoration"></div>
          </div>
          <img className="BackgroundImage" src={bg_image} />
        </div>
        <Footer />
      </AppContext.Provider>
    </div>
  );
}

export default App;
