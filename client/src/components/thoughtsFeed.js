import React, {useState, useEffect} from 'react'
import {useQuery} from '@apollo/client'
import Axios from 'axios'
// import ReactDOM from 'react-dom';
import "./ThoughtsCss.css"
import $ from 'jquery'
import { STORE_THOUGHT} from '../utils/storeThoughts'
import {useMutation} from '@apollo/client'
import {STORE_COMMENT} from '../utils/storeComment'
import Auth from '../utils/auth'
import {STORE_FAVTHOUGHT} from '../utils/storeFavThought'
import {QUERY_COMMENT} from '../utils/queryThought'



let divArray
function Thoughts({thoughts}) {

  const [submitBtn, setSubmit] = useState('submit')
  const [storeText, setText] = useState('')
  const [storeUser, setUser] = useState('')
  const [displayComment, showCommentBox] = useState('d-none')
  const [addThought, { data,loading,error }] = useMutation(STORE_THOUGHT);
  const [addComment, {cData, load, err}] = useMutation(STORE_COMMENT)
  const [addFavThought, {newData, loadThought, er}] = useMutation(STORE_FAVTHOUGHT)
  const {loadComment, commentData} = useQuery(QUERY_COMMENT)
  //  if(loggedIn) {
const [commentState, setComment] = useState({thistext:'', thisauthor:''})
const [displayLeftComment, setdisplayStatus] = useState('d-none')
// const [author, setAuthor] = useState('')
let cardString = []

//fetches Thoughts
// const getStoreThoughts = localStorage.getItem("storedThoughts")
// if(thoughts && !getStoreThoughts) {
//   const localStoreThoughts = JSON.stringify(thoughts)
//   localStorage.setItem("storedThoughts", localStoreThoughts)
// } else if (getStoreThoughts) {
//   thoughts = JSON.parse(getStoreThoughts)

// }


setTimeout(clearLocalThoughts,600000)

function clearLocalThoughts() {
  localStorage.removeItem('storedThoughts')

}

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
let newComment
async function submitForm(eve) {
  const {id} = eve.target
  const splitId = id.split("_")
  const newThoughtId = splitId[1];
  const formData = {thoughtId: newThoughtId, commentText: storeText, commentor: storeUser}
  const {cData} = await addComment({
    variables: formData
  })

setComment({thisText: storeText, thisAuthor: storeUser})
setdisplayStatus('d-block')
  // window.location.reload()

}

function showComment(e) {
  e.preventDefault();
  const {id} = e.target
  const newId = id.split('_')
  const targetDiv = document.getElementById(`div${newId[1]}`)
  targetDiv.classList.remove('d-none')
  targetDiv.classList.add('d-block')
}

async function saveFavThought(e) {
  e.preventDefault();
  const {id} = e.target
  const splitId = id.split('_')
  const favThoughtId = splitId[1]
  const token = localStorage.getItem('id_token')
  const profileData = Auth.getProfile(token)
  const extractProfileData = profileData.data
  const userEmail = extractProfileData.email
  const { newData } = await addFavThought({
    variables: {email: userEmail, thoughtId: favThoughtId
    }}
  )
  


  }


    return (
      <div className="align-items-center ">
        <br></br>
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
        <div id={"comment"+ item._id}>
        {item.comments.map((thisComment) => (
          <div>
          <p className="ml-4 mr-4 mb-3"> Author: {thisComment.commentor} </p>
          <p className="ml-4 mr-4 mb-3"> Comment: {thisComment.commentText} </p>
          </div>
        ))}
        </div>
        <div className="btn-group" style={{boxShadow: 'none'}}>
        <button className="btn btn-primary w-25 ml-4 mr-4 mb-3" id={"btn" + "_" + item._id} onClick={(e)=>{showComment(e)}}>leave comment</button>
        <button className="btn btn-primary w-25 ml-4 mr-4 mb-3" id={"fav"+"_"+item._id} onClick={(e)=>saveFavThought(e)}> {loadThought? ('saving favorite...') : ('add to favorite quotes')} </button>
          </div>
      <div id={'leaveComment'+ item._id} className={displayLeftComment}>
        <p> Author: {commentState.thisauthor}</p>
        <p> Comment: {commentState.thistext}</p>
        </div>
        <div id={"div" + item._id} className={displayComment}>
        <form>
  <div className="form-group">
    <label>Your Comment :</label>
    <input type="text" onChange={(e)=> setText(e.target.value)}className="form-control m-3" id={'commentText' + item._id} placeholder="your comment here." />
    <input type="text"  onChange={(ev) => setUser(ev.target.value)}className="form-control m-3" id={'commentor' + item._id} placeholder="Username" />
    <button className="btn btn-primary m-2" id={'submit' + '_' + item._id} type="submit" onClick={(e) => submitForm(e)} >{load ? 'loading...' :submitBtn}</button>
  </div>
  </form>
        </div>
      </div>
      ))}
      
      </div>

)

    }
  



export default Thoughts;