import React from 'react';
import {Router} from 'react-router-dom'
import history from './services/history'
import AppRouter from './routing/routing'
import Header from './components/header'
import './styles/solita.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;
