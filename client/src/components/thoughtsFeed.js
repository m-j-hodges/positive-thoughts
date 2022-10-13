import React from 'react'
import Axios from 'axios'
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import "./ThoughtsCss.css"
import {QUERY_COMMENTS} from  '../utils/queries'
import $ from 'jquery'
import {STORE_THOUGHT} from '../utils/storeThoughts'
import {useMutation} from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'



let divArray
function Thoughts({thoughts}) {
  const [displayComment, showCommentBox] = useState('d-none')
  const [addThought, { data,loading,error }] = useMutation(STORE_THOUGHT);
  //  if(loggedIn) {
const [newFact, setFact] = useState('')
// const [author, setAuthor] = useState('')
let cardString = []

//fetches Thoughts


function collapseIt(event) {
  const {id} = event.target
  $('#collapse' + id).toggle()

}

async function querySave(e) {
  e.preventDefault();
  Axios.get('https://type.fit/api/quotes')
  .then((res)=> {
    console.log(res)
    console.log(res.data)
    divArray = res.data
    divArray.length = 20
    // saveQuotes =localStorage.setItem('quotes', JSON.stringify(divArray))
  

  try{
  divArray.forEach((quote) => {
  const {data} = async() => await addThought({
    variables: {author: quote.author, text: quote.text}
  })
}

  )
  // window.location.reload();
  } catch (err) {
    console.error(err)
  }
})
}
if(loading) {
  return 'submitting...'
}
if(error) {
  return `submission error ${error}`
}

function submitForm() {
  

}

    return (
      <div>
      {thoughts && thoughts.map((item) => (
        <div className="card my-4" id={item._id}>
        <div className="card-header">
          Quote
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{item.text}</p>
            <footer className="blockquote-footer">{item.author} <cite title="Source Title"></cite></footer>
          </blockquote>
        </div>
        <button onClick={()=>{showCommentBox("d-block")}} className="btn btn-primary">leave comment</button>
        <div className={displayComment}>
        <form>
  <div className="form-group">
    <label for="formGroupExampleInput">Your Comment :</label>
    <input type="text" className="form-control" id={'commentText' + item._id} placeholder="Example input" />
    <input type="text" className="form-control" id={'commentor' + item._id} placeholder="Your Username" />
    <button id={'submit' + item._id}type="submit" onClick={submitForm} className="btn btn-primary">Submit</button>
  </div>
  </form>
        </div>
        {item.comments ? item.comments.map((eachItem) => (
          <div>
          <p>
          <a id={eachItem._id} onClick={collapseIt} className="btn btn-primary collapsed" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
          </p>
          <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id={'collapse' + eachItem._id}>
              <div className="card card-body">
              Author: {eachItem.commentor} Comment: {eachItem.commentText}
            </div>
          </div>
          </div>
          </div>
          </div>

        )): (<div>There are no comments yet...</div>)}
      </div>
      ))}
      <button className="btn btn-success" onClick={(e) => querySave(e)}>Query and Save Data</button>
      
      <button>Click Me!</button> 
      </div>
    )

    }
  



export default Thoughts;