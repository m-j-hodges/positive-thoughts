import React from 'react'
import Axios from 'axios'
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import "./ThoughtsCss.css"
import {QUERY_COMMENTS} from  '../utils/queries'
import $ from 'jquery'
import {STORE_THOUGHTS} from '../utils/storeThoughts'
import {useMutation} from '@apollo/client'


function Thoughts({comments, manyThoughts}) {

  const [addThought, { error }] = useMutation(STORE_THOUGHTS);
  //  if(loggedIn) {
const [newFact, setFact] = useState('')
// const [author, setAuthor] = useState('')
let cardString = []

//fetches Thoughts
const fetchData = () => {


const cachesQuotes = localStorage.getItem('quotes')
let divArray
let saveQuotes
if(!cachesQuotes) {
  
const fetchResult = Axios.get('https://type.fit/api/quotes')
  .then((res)=> {
    console.log(res)
    console.log(res.data)
    divArray = res.data
    divArray.length = 20
    saveQuotes =localStorage.setItem('quotes', JSON.stringify(divArray))
    try{
    const { data } = addThought({
      variables: {...divArray},
    })
  }
  catch (err) {
    console.log(err)
  }
    
  })}
let count = 0
  divArray = JSON.parse(cachesQuotes)
    const newArray = divArray.forEach((item) => {
    count++
    const writeQuotes = document.getElementById('quotesDiv')
    writeQuotes.innerHTML += `<div class="card my-4" id=${count}>
      <div class="card-header">
        Quote
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>${item.text}</p>
          <footer class="blockquote-footer">${item.author} <cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
      <button class="btn btn-primary" id="commentBtn${count}">comment</button>
    </div>`
    return cardString, count
    })
    console.log(newArray)
}
  //   const relevantData = data.map((item) => {
  //   return `<div class="card">
  //   <div class="card-body">
  //     "${item.q}"
  //     --${item.a}
  //   </div>
  // </div>`
  //   })
  // }

function collapseIt(event) {
  const {target} = event
  $('.collapse').toggle()
  
}

    return (
      <div>
      <div id="quotesDiv">
        {manyThoughts && manyThoughts.map((oneThought) => (
        <div class="card my-4" id={oneThought._id}>
        <div class="card-header">
          Quote
        </div>
        <div class="card-body">
          <blockquote class="blockquote mb-0">
            <p>${oneThought.text}</p>
            <footer class="blockquote-footer">${oneThought.author} <cite title="Source Title"></cite></footer>
          </blockquote>
        </div>
        <button class="btn btn-primary" id="commentBtn${count}">comment</button>
      </div>

        ))}
      </div>
        {comments && comments.map((comment) => (
          <div>
          <p>
          <a id={comment._id} className="btn btn-primary collapsed" onClick={(event) => collapseIt(event)} data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
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
      <button onClick={!manyThoughts ? fetchData : false}>Click Me!</button> 
      </div>
    )

    }



export default Thoughts;