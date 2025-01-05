import React, { useState, useEffect } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import Axios from "axios";
// import ReactDOM from 'react-dom';
import "./ThoughtsCss.css";
import $ from "jquery";
import { STORE_THOUGHT } from "../utils/storeThoughts";
import { useMutation } from "@apollo/client";
import { STORE_COMMENT } from "../utils/storeComment";
import Auth from "../utils/auth";
import { STORE_FAVTHOUGHT } from "../utils/storeFavThought";
import { QUERY_COMMENT } from "../utils/queryThought";
import CommentFeed from "./comments";
import {QUERY_THOUGHTS}from "../utils/queryThoughts"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { QUERY_ME } from '../utils/queries';


let divArray;
function Thoughts({ thoughts , startIndex}) {

  const navigate = useNavigate();
  if(Auth.isTokenExpired(Auth.getToken())){
    navigate("/")
  }
  if(localStorage.getItem("startIndex")){
    startIndex = parseInt(localStorage.getItem("startIndex"))
  }
  const {profileId} = useParams();
  const [getProfile,{ pLoading, pData, pError }] = useLazyQuery(
    QUERY_ME,
    {
      variables: { profileId: profileId },
    }
  );
  const tThoughts = thoughts.slice(startIndex, startIndex + 20);
  const [tFeed, setTFeed] =useState(tThoughts)
  const [submitBtn, setSubmit] = useState("submit");
  const [commentText, setCommentText] = useState("")
  const [storeText, setText] = useState("");
  const [storeUser, setUser] = useState("");
  const [displayComment, showCommentBox] = useState("d-none");
  const [ getThoughtData, {tLoading, tData, tError} ] = useLazyQuery(QUERY_THOUGHTS)
  const [addThought, { data, loading, error }] = useMutation(STORE_THOUGHT);
  const [addComment, { cData, load, err }] = useMutation(STORE_COMMENT);
  const [addFavThought, { newData, loadThought, er }] =
    useMutation(STORE_FAVTHOUGHT);
  const { loadComment, commentError, commentData } = useQuery(QUERY_COMMENT);
  //  if(loggedIn) {
  const [commentState, setComment] = useState({
    thistext: "",
    thisauthor: "",
    thisThoughtId: "",
  });

  // const location = useLocation();

  // useEffect(() => {


  // }, [location])


  //fetches Thoughts
  const getStartIndex = localStorage.getItem("startIndex")
  if(thoughts && !getStartIndex) {
      const localStartIndex = JSON.stringify(startIndex)
     localStorage.setItem("startIndex", localStartIndex)
   }

  setTimeout(clearLocalThoughts, 600000);

  function clearLocalThoughts() {
    localStorage.removeItem("startIndex");
  }

  function CloseForm(e){
    const { id } = e.target;
    const newId = id.split("_");
    const targetDiv = document.getElementById(`div${newId[1]}`);
    targetDiv.classList.remove("d-block");
    targetDiv.classList.add("d-none");
  }

  function collapseIt(event) {
    const { id } = event.target;
    $("#collapse" + id).toggle();
  }

  async function querySave(e) {
    e.preventDefault();
    Axios.get("https://type.fit/api/quotes").then((res) => {
      console.log(res);
      console.log(res.data);
      divArray = res.data;
      // saveQuotes =localStorage.setItem('quotes', JSON.stringify(divArray))

      try {
        divArray.forEach(async (quote) => {
          const { data } = await addThought({
            variables: { author: quote.author, text: quote.text },
          });
        });
        // window.location.reload();
      } catch (err) {
        console.error(err);
      }
    });
  }
  if (loading) {
    return "submitting...";
  }
  if (error) {
    return `submission error ${error}`;
  }
  let newComment;

  //////////// form submit function.
  async function submitForm(eve) {
    eve.preventDefault();
    const { id } = eve.target;
    const splitId = id.split("_");
    const newThoughtId = splitId[1];
    const formData = {
      thoughtId: newThoughtId,
      commentText: storeText,
      commentor: storeUser,
    };
    const { cData } = await addComment({
      variables: formData,
    });

    // get new thoughts and assign it to proper state.
    const response = await getThoughtData()
    const splicedArray = response.data.thoughts.slice(startIndex, startIndex+20)
    setTFeed(splicedArray)
    setCommentText("");
    setText("")
    //setdisplayStatus("d-block");
    // window.location.reload()
  }

  async function showComment(e) {
    e.preventDefault();
    // get profile data if Exists.
    const profile = await getProfile();
    const profileData = profile?.data.me || {};
    profileData.username ? setUser(profileData.username) : setUser("");
    const { id } = e.target;
    const newId = id.split("_");
    const targetDiv = document.getElementById(`div${newId[1]}`);
    targetDiv.classList.remove("d-none");
    targetDiv.classList.add("d-block");
    const tInput = document.getElementById("commentor" + newId[1]);
    tInput.disabled = true;
  }

  async function saveFavThought(e) {
    e.preventDefault();
    const { id } = e.target;
    const splitId = id.split("_");
    const favThoughtId = splitId[1];
    const token = localStorage.getItem("id_token");
    const profileData = Auth.getProfile(token);
    const extractProfileData = profileData.data;
    const userEmail = extractProfileData.email;
    const { newData } = await addFavThought({
      variables: {
        email: userEmail,
        thoughtId: favThoughtId,
      },
    });
  }

  return (
    <div className="align-items-center ">
      <br></br>
      {tFeed &&
        tFeed.map((item) => (
          <div className="card my-4" id={item._id}>
            <div className="card-header">Quote</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{item.text}</p>
                <footer className="blockquote-footer">
                  {item.author} <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </div>
            <div id={"comment" + item._id}>
              {tLoading && <p>Loading...</p>}
              {item.comments && (<CommentFeed comments={item.comments} />)}
              {/* {item.comments &&
                item?.comments.map((c) => (
                  <div id={"#" + c._id}>
                    <p className="ml-4 mr-4 mb-3"> Author: {c.commentor} </p>
                    <p className="ml-4 mr-4 mb-3"> Comment: {c.commentText} </p>
                  </div>
                ))} */}
              {
                <div
                  id={"leaveComment" + item._id}
                  className={commentState.thisThoughtId == item._id ? "d-block" : "d-none"}
                >
                  <p> Author: {storeUser}</p>
                  <p> Comment: {storeText}</p>
                </div>
              }
            </div>
            <div style={{textAlign:"center"}}>
            <div className="btn-group" style={{ boxShadow: "none", width:60 +"%" }}>
              <button
                className="btn btn-primary ml-3 mb-3"
                id={"btn" + "_" + item._id}
                onClick={(e) => {
                  showComment(e);
                }}
              >
                leave comment
              </button>
              <button
                className="btn btn-primary mr-3 mb-3"
                id={"fav" + "_" + item._id}
                onClick={(e) => saveFavThought(e)}
              >
                {" "}
                {loadThought
                  ? "saving favorite..."
                  : "add to favorite quotes"}{" "}
              </button>
            </div>
            </div>

            <div id={"div" + item._id} className={displayComment}>
              <div className="form-group">
                <label className="ml-3">Your Comment :</label>
                <input
                  type="text"
                  onChange={(e) => {setText(e.target.value);setCommentText(e.target.value)}}
                  value={commentText}
                  className="form-control m-3 w-50"
                  id={"commentText" + item._id}
                  placeholder="Type your comment"
                />
                <input
                  type="text"
                  className="form-control m-3 w-25"
                  id={"commentor" + item._id}
                  value={storeUser}
                  placeholder="Username"
                />
                <button
                  className="btn btn-primary ml-3"
                  id={"submit" + "_" + item._id}
                  type="button"
                  onClick={(eve) => submitForm(eve)}
                >
                  {load ? "loading..." : submitBtn}
                </button>
                <button
                  className="btn btn-danger ml-3"
                  id={"btnDanger" + "_" + item._id}
                  type="button"
                  onClick={(eve) => CloseForm(eve)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
    )
}

export default Thoughts;
