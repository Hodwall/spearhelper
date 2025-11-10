import './App.css'
import TurnPhases from './components/TurnPhases/TurnPhases';
import Footer from './components/Footer/Footer';
import VictoryPoints from './components/VictoryPoints/VictoryPoints';
import bg_image from "./assets/bg_image.jpg";
import TacticCards from './components/TacticCards/TacticCards';

function App() {
  return (
    <div className="App">
      <div className="app-content">
        <div className="app-content__top-left"/>
        <div className="app-content__top"/>
        <div className="app-content__top-right"/>
        <div className="app-content__left"/>
        <div className="app-content__center">
          <TurnPhases />
          <div className="app-content__center--main">
            <VictoryPoints />
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
    </div>
  )
}

export default App
