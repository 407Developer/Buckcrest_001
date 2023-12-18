import './App.css';
// import './Components/Welcome/Welcome'
// import BuyAndSell from './Components/BuyAndSell/BuyAndSell';
import Welcome from './Components/Welcome/Welcome';
import HomeBody from './Components/HomeBody/HomeBody';
import LandingPage from './Pages/InfoPage/LandingPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppInfoSlider from './Pages/InfoPage/AppInfoSlider';
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">08033155536
        <Route exact path='/' Component={LandingPage}/>
        <Route exact path='/app-info' Component={AppInfoSlider}/>
        <Route exact path='/login-signup' Component={LoginSignUpPage}/>
          {/* <Welcome /> */}
          {/* <HomeBody /> */}
          {/* <BuyAndSell/> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
