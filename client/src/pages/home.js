import React from 'react';
import Navbar from '../components/Navbar';

import Thoughts from '../components/thoughtsFeed';
import {QUERY_COMMENTS} from  '../utils/queryComments';
import {useQuery} from '@apollo/client';
import {QUERY_THOUGHTS} from '../utils/queryThoughts';
import '../../src/app.css' 



const Home = () => {
  
const {loadingThoughts, manyThoughts} = useQuery(QUERY_THOUGHTS)
const { loading, data} = useQuery(QUERY_COMMENTS)

const commentFeed = data?.comments || [];

  return (
    <div className='photo'>
<Navbar bg="black" />
{loading || loadingThoughts ? (<div>Loading...</div>) :(
 <div className="col-12 col-md-8 mb-3">
<Thoughts comments={commentFeed} thoughts={manyThoughts}/>
</div> 
)}
</div>
  );
};

export default Home;