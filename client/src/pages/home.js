import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/login';
import Thoughts from '../components/thoughtsFeed'
import {useQuery} from '@apollo/client'
import {QUERY_THOUGHTS} from '../utils/queryThoughts'



const Home = () => {
  
const {loading, data} = useQuery(QUERY_THOUGHTS)



const thoughtsFeed = data?.thoughts || [];

  return (
    <div>
<Navbar />
<Login />
{loading ? (<div>Loading...</div>) :(
 <div className="col-12 col-md-8 mb-3">
<Thoughts thoughts={thoughtsFeed}/>
</div> 
)}
</div>
  );
};

export default Home;