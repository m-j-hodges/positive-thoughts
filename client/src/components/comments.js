import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_COMMENT } from "../utils/queryThought";

function CommentFeed({ comments }) {
  // const { comments, setComments } = useState([]);
  // const { loading, data } = useQuery(QUERY_COMMENT, {
  //   variables: thoughtId,
  // });
  // const theseComments = data?.comments || [];
  
  return (
    <div>
      {comments &&
        comments.map((c) => (
          <div id={"#" + c._id}>
            <p className="ml-4 mr-4 mb-3"> Author: {c.commentor} </p>
            <p className="ml-4 mr-4 mb-3"> Comment: {c.commentText} </p>
          </div>
        ))}
    </div>
  );
}

export default CommentFeed;
