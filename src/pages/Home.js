import React from 'react';
import './Home.css';

const Home = () => {
  const str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit id
  temporibus cum excepturi maxime doloribus quis, deleniti vero architecto
  ducimus distinctio cupiditate laudantium vitae recusandae culpa pariatur
  exercitationem? Officiis, magnam.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit id
  temporibus cum excepturi maxime doloribus quis, deleniti vero architecto
  ducimus distinctio cupiditate laudantium vitae recusandae culpa pariatur
  exercitationem? Officiis, magnam.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit id
  temporibus cum excepturi maxime doloribus quis, deleniti vero architecto
  ducimus distinctio cupiditate laudantium vitae recusandae culpa pariatur
  exercitationem? Officiis, magnam.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit id
  temporibus cum excepturi maxime doloribus quis, deleniti vero architecto
  ducimus distinctio cupiditate laudantium vitae recusandae culpa pariatur
  exercitationem? Officiis, magnam.`;

  return (
    <div className="home">
      <h2>Welcome to our page</h2>
      <p>{str}</p>
      <p>{str}</p>
    </div>
  );
};

export default Home;
