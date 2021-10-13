import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {BrowserRouter, Route} from "react-router-dom"
import Articles from "./components/Articles";
import Help from "./components/Help"
import Sidebar from "./components/Sidebar"
import SingleArticle from "./components/SingleArticle"
import './stylesheets/App.css';


ReactDOM.render(
  <BrowserRouter>
    <Sidebar />

  <Route path="/articles">
    <Articles />
  </Route>
  <Route path="/help">
    <Help />
  </Route>
  <Route path="/article/:slug" component={SingleArticle} />
  <Route path="/" exact>
    <App />
  </Route>
  </BrowserRouter>,
  document.getElementById('root') 
);


