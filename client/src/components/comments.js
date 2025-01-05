import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { QUERY_COMMENT } from "../utils/queryThought";
import "./comments.css";

function CommentFeed({ comments }) {
  // const { comments, setComments } = useState([]);
  // const { loading, data } = useQuery(QUERY_COMMENT, {
  //   variables: thoughtId,
  // });
  // const theseComments = data?.comments || [];
  
  const style= {
    paddingLeft: 3 + 'rem',
    listStyleType : "none",
    paddingRight: 10 + 'rem'
  };

  const divStyle = {
    borderRadius: "10px",
    paddingTop: "10px",
    paddingBottom: "10px",
    backgroundColor: "#EEF2F8"
    //"#F8F4EE"
  }

  return (
    <div>
      {comments &&
        comments.map((c) => (
          <ul id={"#" + c._id}>
            <li style={style}>
              <div style={divStyle}>
            <p className="ml-4 mr-4 mb-3"> Author: {c.commentor} </p>
            <p className="ml-4 mr-4 mb-3"> Comment: {c.commentText} </p>
            </div>
            </li>
          </ul>
        ))}
    </div>
  );
}

export default CommentFeed;
