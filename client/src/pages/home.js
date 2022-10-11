import React from 'react';
import Navbar from '../components/Navbar';

import Thoughts from '../components/ThoughtsFeed'
import {QUERY_COMMENTS} from  '../utils/queryComments'
import {useQuery} from '@apollo/client'




const Home = () => {

const { loading, data} = useQuery(QUERY_COMMENTS)

const commentFeed = data?.comments || [];

  return (
    <div>
<Navbar />
{loading ? (<div>Loading...</div>) :(
 <div className="col-12 col-md-8 mb-3">
<Thoughts comments={commentFeed}/>
</div> 
)}
</div>
  );
};

export default Home;