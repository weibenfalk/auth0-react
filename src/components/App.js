import React from 'react';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';
import AuthenticatedRoute from './AuthenticadedRoute';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Header />
    <Router>
      <AuthenticatedRoute path='/' component={Home} />
      <AuthenticatedRoute path='/:movieId' component={Movie} />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
