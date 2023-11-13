import Header from './components/header/Header';
import Promo from './components/Promo/Main';
import Cards from './components/cards/Cards';


function App() {
  const pr = `lorem`;
  return (
    <div className="App">
      <Header />
      <Promo />
      <Cards />
      <h1>{pr}</h1>

    </div>
  );
}

export default App;
