import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import Comment from "./Comment";


const Answer = (props) => {
  const [comments, setComments] = useState([]);
  const [ show, setShow ] = useState(false); 

  const addComment = (comment) => {
    setComments(...comments, comment);
  };

  const renderAnswers = () => {
    return(
      <div>
        <br />
        <h4 onClick={() => setShow(!show)}>{props.body}</h4>
        {show && <Comment answer={props.id} />}
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