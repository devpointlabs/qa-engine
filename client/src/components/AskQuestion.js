import React, { useState } from 'react'
import axios from 'axios';
import QuestionForm from './QuestionForm';


const AskQuestion = () => {

  const [questions, setQuestions] = useState()

  const addQuestion = (question) => {
    axios
      .post(`/api/questions`, question)
      .then((res) => {
        setQuestions([...questions, res.data]);
      })
      .catch((err) =>{
        alert("Something went wrong");
      });
      window.location.href="/MyQuestions"
    };
    
    
  return (
    <div>
      <br />
      <br />
      <br />
      <QuestionForm addQuestion={addQuestion}/>
    </div>
  )
}



export default AskQuestion