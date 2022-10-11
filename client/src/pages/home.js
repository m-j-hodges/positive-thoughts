import React from 'react';
import Navbar from '../components/Navbar';
import Thoughts from '../components/thoughtsFeed'
import backgroundImage from '../../src/img/stacked_rocks.png';

const Home = () => {

  return (
    <div>
<Navbar />
//<img src={backgroundImage}  alt=""/>
<Thoughts />
</div>
  );
};

export default Home;