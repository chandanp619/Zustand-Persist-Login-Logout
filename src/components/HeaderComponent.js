import React from 'react';
import { useUserStore } from '../store/UserStore';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  var loggedin = useUserStore((state)=> state.isLoggedIn);


  return (
    <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
            {loggedin?
            <li><Link to='/logout'>Logout</Link></li>
            :
            <li><Link to='/login'>Login</Link></li>
            }
            
          </ul>
        </nav>
    </header>
  )
}
