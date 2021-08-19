import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <div className="navBar">
      <h1>Math Magicians</h1>
      <ul>
        {links.map((link) => <li key={link.id}><NavLink to={link.path} className="link" activeClassName="active-link" exact>{link.text}</NavLink></li>)}
      </ul>
    </div>
  );
};

export default NavBar;
