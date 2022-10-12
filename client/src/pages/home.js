import React from 'react';
import Navbar from '../components/Navbar';
import Thoughts from '../components/thoughtsFeed';
import  '../styles/app.css';


const Home = () => {

  return (
    <div className="photo">
<Navbar />
<Thoughts />
</div>
  );
};

export default Home;