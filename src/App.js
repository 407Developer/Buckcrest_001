import './App.css';
// import './Components/Welcome/Welcome'
// import BuyAndSell from './Components/BuyAndSell/BuyAndSell';
import Welcome from './Components/Welcome/Welcome';
import HomeBody from './Components/HomeBody/HomeBody';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <HomeBody/>
      {/* <BuyAndSell/> */}
    </div>
  );
}

export default App;
