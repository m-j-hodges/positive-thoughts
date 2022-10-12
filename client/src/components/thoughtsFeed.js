import React from 'react'
import Axios from 'axios'
// import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import "./ThoughtsCss.css"
// import {QUERY_COMMENTS} from  '../utils/queries'


function Thoughts({comments}) {
  //  if(loggedIn) {
const [newFact, setFact] = useState('')
// const [author, setAuthor] = useState('')
let cardString = []
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
 
    return (
      <div>
      <div id="quotesDiv"></div>
      <div className="card-body" id='comments'>
        {comments[0].map((item) =>{
          <div>
          <a class="btn btn-primary" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
          <div class="col">
          <div class="collapse multi-collapse" id="multiCollapseExample1">
            <div class="card card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        </div>
        })}
      </div>
      <button onClick={fetchData}>Click Me!</button> 
      </div>
    )

    }



export default Thoughts;