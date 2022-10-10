import React from 'react'
import Axios from 'axios'
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'
import "./ThoughtsCss.css"



function Thoughts() {
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

  divArray = JSON.parse(cachesQuotes)
    const newArray = divArray.forEach((item) => {
    const writeQuotes = document.getElementById('quotesDiv')
    writeQuotes.innerHTML += `<div class="card my-4">
      <div class="card-header">
        Quote
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>${item.text}</p>
          <footer class="blockquote-footer">${item.author} <cite title="Source Title"></cite></footer>
        </blockquote>
      </div>
    </div>`
    return cardString
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
      <div id="commentsFeed"></div>
      <button onClick={fetchData}>Click Me!</button> 
      </div>
    )

    }



export default Thoughts;