import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { AuthContext } from "../providers/AuthProvider";
import Upvote from "./Upvote";


const Answer = (props) => {
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [ show, setShow ] = useState(false); 
  const [ showC, setShowC ] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answer, setAnswer] = useState([]);


  const addComments = (comment) => {
    setComments(...comments, comment);
  };

  //   const addComment = (props) => {
  //   Axios
  //   .post(`api/answers/${props.id}/comments`)
  //   .then((res) => {
  //     setComments([...comments, res.data]);
  //   })
  //   .catch((err) => {
  //     alert("No comment posted")
  //   });
  // };

  // useEffect =() => {
  //   // Axios
  //   // .post(`api/answers/${props.id}/comments`)
  //   // .then((res) => {
  //   //   setComments([...comments, res.data]);
  //   // })
  //   // .catch((err) => {
  //   //   alert("No comment posted")
  //   // });
  // }
  
    const isUserMatching = () => {
    if (props.user.id === props.user_id ){
     return <button variant="danger" onClick={() => props.deleteAnswer(props.aID)}>Delete Answer</button>;
    }
  }
  
  

  const renderAnswers = () => {
    return(
      <div key={answer.id}>
        <br />

        <p>User: {props.first_name}</p>
        <div onClick={() => { setShow(!show);
         }} dangerouslySetInnerHTML={{__html:props.body}}></div><Upvote mString="answer" mId={props.id} upvote={props.upvote} answer={props} />
         {isUserMatching()}
        {show && <Comments {...comments} answerID={props.id} authUser={user} userID={props.user_id}/>}
        
      </div>
      

    );
  };



  return (
    <div>
      {renderAnswers()}
    </div>
  )
};





 
export default Answer;