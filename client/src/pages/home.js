import React from 'react';
import Navbar from '../components/Navbar';

import Thoughts from '../components/thoughtsFeed'
import {useQuery} from '@apollo/client'
import {QUERY_THOUGHTS} from '../utils/queryThoughts'



const Home = () => {
  
const {loading, data} = useQuery(QUERY_THOUGHTS)


const thoughtsFeed = data?.thoughts || [];


  const n = Math.floor(Math.random()* 1349)
  const newThoughtsFeed = thoughtsFeed.slice(n, n+20)




  return (
    <div>
<Navbar />
{loading ? (<div>Loading...</div>) :(
 <div className="col-12 col-md-8 mb-3">
<Thoughts thoughts={newThoughtsFeed}/>
</div> 
)}
</div>
  );
};

export default Home;