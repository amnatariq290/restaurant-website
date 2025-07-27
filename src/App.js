import MainFooter from "./components/Layouts/MainFooter";
import MainNavigation from "./components/Layouts/MainNavigation";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import TakeOut from "./pages/TakeOut";
import Login from "./pages/Login";
import { useState } from "react";
import About from './pages/About';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';


function App() {
  const [isOnTakeout, setIsOnTakeout] = useState(false);

  const setNavBarHandler = (input) => {
    if (input === "onPage") {
      setIsOnTakeout(true);
    } else {
      setIsOnTakeout(false);
    }
  };

  return (
    <>
      {!isOnTakeout && <MainNavigation />}
      <Switch>
  <Route path="/" exact>
    <Main />
  </Route>
  
  <Route path="/about">
    <About />
  </Route>
  
  <Route path="/contact">
    <Contact />
  </Route>
  
  <Route path="/menu">
    <Menu />
  </Route>
  
  <Route path="/takeout-order">
    <TakeOut onTakeOut={setNavBarHandler} />
  </Route>
  
  <Route path="/login">
    <Login />
  </Route>

  <Route path="/reservation">
    <Reservation />
  </Route>
</Switch>

      <MainFooter />
    </>
  );
}

export default App;
