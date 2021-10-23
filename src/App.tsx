import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import async from '@components/Async/Async';
import { hot } from 'react-hot-loader';

// Styled
import GlobalStyle from '@src/styled/global-styles';
import {FirstExamplePage, SecondExamplePage} from '@src/pages/Home/Home';

// Pages
export const Home = async(() => import('@src/pages/Home/Home'));

function App() {
  return (
      <Router>
        <GlobalStyle />
        <div className="App">
            <Route path="/"
                   component={ Home } />
            <Route path='/first-example'
                   component={FirstExamplePage} />
            <Route path='/second-example'
                   component={SecondExamplePage} />
        </div>
      </Router>
  );
}

export default hot(module)(App);
