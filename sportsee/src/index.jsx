import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index';
import List from './pages/List/index';
import './assets/css/style.css';
import Header from './components/Header/index'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route exact path="/"  element={<List />} />
          <Route exact path="/:userId"  element={<Home />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
