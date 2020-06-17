import React from 'react';

//Router
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';

//components
import Header from './components/Header'
import PhonesList from './components/PhonesList';
import PhoneDetails from './components/PhoneDetails';

//Material UI. Frontend framework or library that allows easier and faster UI designing
import { Grid } from '@material-ui/core';

function App() {

  return (
    <Router>
      <Grid container spacing ={2} direction="column">
        <Grid item >
          <Header />
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={1}/>
          <Grid item xs={12} sm={10}>
            <Route exact path="/" render={props => (
            <PhonesList/>
            )} />
            <Route path="/details" component = {PhoneDetails}/>
          </Grid>
          <Grid item xs={0} sm={1}/>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;


