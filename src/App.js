import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import House from './pages/House/House';
import PlaceMap from './pages/PlaceMap/PlaceMap';
import NotMatch from './pages/NotMatch/NotMatch';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route exact path ="/">
              <Home></Home>
          </Route>
          <Route path ="/auth">
              <Auth></Auth>
          </Route>
          <Route path ="/house/:id">
             <House></House>
          </Route>
          <Route path ="/map">
             <PlaceMap></PlaceMap>
          </Route>
          <Route path ="*">
             <NotMatch></NotMatch>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
