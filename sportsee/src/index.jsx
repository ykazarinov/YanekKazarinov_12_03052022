import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import './assets/css/style.css';
import Home from './pages/Home/index';
import './assets/css/style.css';
import Header from './components/Header/index'

import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/:userId" render={(props) => <Home {...props}/>}  element={<Home />} />
        </Routes>


    </Router>
  </React.StrictMode>
);
