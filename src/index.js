import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home'
import Finished from './pages/Finished';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route path="/finished">
          <Finished/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
        
      </Switch>
    </Router>
   </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
