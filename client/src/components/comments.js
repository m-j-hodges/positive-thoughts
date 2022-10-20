import React from 'react'


function CommentFeed({ comments }) {

  return (
    <div>
      {comments && comments.map((comment) => (
        <div>
          <p>
            <a id={comment._id} className="btn btn-primary collapsed" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
          </p>
          <div className="row">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  Author: {comment.creator} Comment: {comment.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  )
}