import Header from './components/header/Header';
import Cards from './components/cards/Cards';
import Main from './components/main/Main';
import Data from './components/data/Data';
import Facts from './components/facts/Facts';
import Offers from './components/offers/Offers';
import Questions from './components/questions/Questions';
import Footer from './components/footer/Footer';
import First from './components/first/First';
import Form from './components/form/Form';


function App() {

  return (
    <div className="App" >
      <Header />
      <Main />
      <Cards />
      <Data />
      <Facts />
      <First />
      <Offers />
      {/* <About /> */}
      <Questions />
      <Form/>
      <Footer />
    </div>
  );
}

export default App;
