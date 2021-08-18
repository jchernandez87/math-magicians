import React from 'react';
import './NavBar.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
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
        {links.map((link) => <li key={link.id}>{link.text}</li>)}
      </ul>
    </div>
  );
};

export default NavBar;
