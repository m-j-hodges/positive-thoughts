import React from 'react'
import Axios from 'axios'
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import "./ThoughtsCss.css"
import {QUERY_COMMENTS} from  '../utils/queries'
import $ from 'jquery'
import { STORE_THOUGHT} from '../utils/storeThoughts'
import {useMutation} from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'
import {STORE_COMMENT} from '../utils/storeComment'



let divArray
function Thoughts({thoughts}) {

  console.log(thoughts)
  const [submitBtn, setSubmit] = useState('submit')
  const [storeText, setText] = useState('')
  const [storeUser, setUser] = useState('')
  const [displayComment, showCommentBox] = useState('d-none')
  const [addThought, { data,loading,error }] = useMutation(STORE_THOUGHT);
  const [addComment, {cData, load, err}] = useMutation(STORE_COMMENT)
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
  divArray.forEach(async (quote) => {
  const {data} = await addThought({
    variables: {author: quote.author, text:quote.text}
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

async function submitForm(eve) {
  const {id} = eve.target
  const splitId = id.split("_")
  const newThoughtId = splitId[1];
  const formData = {thoughtId: newThoughtId, commentText: storeText, commentor: storeUser}
  const {data} = await addComment({
    variables: {formData}
  })
  window.location.reload()

}

function showComment(e) {
  e.preventDefault();
  const {id} = e.target
  const newId = id.split('_')
  const targetDiv = document.getElementById(`div${newId[1]}`)
  targetDiv.classList.remove('d-none')
  targetDiv.classList.add('d-block')
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
        <button id={"btn" + "_" + item._id} onClick={(e)=>{showComment(e)}} className="btn btn-primary">leave comment</button>
        <div id={"div" + item._id} className={displayComment}>
        <form>
  <div className="form-group">
    <label>Your Comment :</label>
    <input type="text" onChange={(e)=> setText(e.target.value)}className="form-control m-3" id={'commentText' + item._id} placeholder="Example input" />
    <input type="text"  onChange={(ev) => setUser(ev.target.value)}className="form-control m-3" id={'commentor' + item._id} placeholder="Your Username" />
    <button className="btn btn-primary m-2" id={'submit' + '_' + item._id} type="submit" onClick={(eve) => submitForm(eve)} >{load ? 'loading...' :submitBtn}</button>
  </div>
  </form>
        </div>
        {item.comments.map((eachItem) => (
          eachItem ? (
          <div>
          <p> Author: {eachItem.commentAuthor}</p>
          <p> Comment: {eachItem.commentText}</p>
          </div> ) : <div> No comments yet... </div> 
        ))}
      </div>
      ))}
      <button className="btn btn-success" onClick={(e) => querySave(e)}>Query and Save Data</button>
      
      <button>Click Me!</button> 
      </div>
    )

    }
  



export default Thoughts;