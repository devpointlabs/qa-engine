import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import Comments from "./Comments";
import CommentForm from "./CommentForm";


const Answer = (props) => {
  const [comments, setComments] = useState([]);
  const [ show, setShow ] = useState(false); 
  const [ showC, setShowC ] = useState(false);

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
  
  
  

  const renderAnswers = () => {
    return(
      <div>
        <br />
        <h4 onClick={() => { setShow(!show);
         setShowC(!showC);}}>{props.body}</h4>
        {show && <Comments answerID={props.id} userID={props.user_id}/>}
        
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