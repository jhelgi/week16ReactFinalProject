import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Home from './Components/Home.js'
import Exercises from './Components/Exercises.js'
import Diets from './Components/Diets.js'


function App() {

  return (
    <Router>
      <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/exercises">Exercises</Nav.Link>
            <Nav.Link href="/diets">Diets</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Switch>
          <Route path="/Diets">
            <Diets />
          </Route>

          <Route path="/Exercises">
            <Exercises />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
