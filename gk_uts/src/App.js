import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Main from './components/main/Main';
import Data from './components/data/Data';
import Facts from './components/facts/Facts';
import Mission from './components/mission/Mission';
import Values from './components/values/Values';
import Offers from './components/offers/Offers';
import FirstDay from './components/firstday/FirstDay';
import FirstMonth from './components/firstmonth/FirstMonth';
import First90Days from './components/first90days/First90Days';
import About from './components/about/About';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';

import swipeup from './assets/icons/swipeup.svg';


function App() {

  return (
    <div className="App">
      {/* <img src={swipeup} alt="arrow" className='arrow' /> */}
      <Header />
      <Main />
      <Cards />
      <Data />
      <Facts />
      <Mission />
      <Values />
      <Offers />
      <FirstDay />
      <FirstMonth />
      <First90Days />
      <About />
      <Questions />
      <Footer />

    </div>
  );
}

export default App;
