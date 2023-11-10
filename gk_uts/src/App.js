import Header from './components/header/Header';
import Promo from './components/Promo/Main';


function App() {
  const pr = `lorem`;
  return (
    <div className="App">
      <Header />
      <Promo />
      <h1>{pr}</h1>
    </div>
  );
}

export default App;
