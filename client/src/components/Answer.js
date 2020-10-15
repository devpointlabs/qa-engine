import React, { useState, useEffect } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";


const Answer = (props) => {
  const [answers, setAnswers] = useState([])
  
  console.log("Here are the props passed down", props.match.params.id)

  useEffect(() => {

    console.log("useEffect triggered");
    Axios
      .get(`/api/questions/${props.match.params.id}/answers`)
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        alert("error retrieving answers");
      });
  });

  return (
    <div>
      <h1>Answers:</h1>
      <br />
      {answers.map((a) => (
        <p>{a.body}</p>
      ))};
      {/* <CommentForm></CommentForm> */}
    </div>
  )
}




 
export default Answer