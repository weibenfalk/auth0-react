import React from 'react';
import { Link } from '@reach/router';
import { useAuth0 } from '../../auth/react-auth0-spa.js';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from '../styles/StyledHeader';

const Header = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <StyledHeader>
      <div className='header-content'>
        <Link to='/'>
          <StyledRMDBLogo src={RMDBLogo} alt='rmdb-logo' />
        </Link>
        {isAuthenticated && <button onClick={() => logout()}>Logout</button>}
        <StyledTMDBLogo src={TMDBLogo} alt='tmdb-logo' />
      </div>
    </StyledHeader>
  );
};

export default Header;
