import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import MainNavContainer from './main_nav/main_nav_container';

const App = (props) => {
  let _isRoot = props.location.pathname === '/' ? 'root-navbar' : 'auth-navbar';
  let signInBtn;
  if (props.location.pathname === '/' || props.location.pathname === '/browse') signInBtn = <GreetingContainer />;
  if (props.location.pathname === 'browse') signInBtn = <MainNavContainer />;
  return(
  <div className='main-top'>
    <div className={ _isRoot }>
      <div className='navbar-header'>
        <Link to='/' className='navbar-header-link'>
          <h1 className='navbar-header-title'>DOCFLIX</h1>
        </Link>
      </div>
      <div className='navbar-greeting'>
        { signInBtn }
      </div>
    </div>
    { props.children }

  </div>
  );
};

export default App;
// put footer after { props.children }

// will recieve logged in helper function from root, then determine which navbar to show
