import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
          <Route path ="/">
              <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
