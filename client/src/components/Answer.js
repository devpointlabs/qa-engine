import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";
import { AuthContext } from "../providers/AuthProvider";
import Upvote from "./Upvote";
import { Card } from "semantic-ui-react";


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
        <p>User: {props.first_name}</p>
        <div onClick={() => { setShow(!show);
         }} dangerouslySetInnerHTML={{__html:props.body}}></div>
<br /><Upvote mString="answer" mId={props.id} upvote={props.upvote} answer={props} /><br /><button onClick={() => { setShow(!show)}}>Show Comments</button><br />
         <br />
         {isUserMatching()}
        {show && 
         <Card fluid>
          <Comments {...comments} answerID={props.id} authUser={user} userID={props.user_id}/>
         </Card> 
          }
        
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