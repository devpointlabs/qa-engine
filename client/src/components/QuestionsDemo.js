import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
{}
const QuestionsDemo = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  // [] as second arg for componentdidmount
  // ()=>{} this is a unnamed function in this example it is a callback
  // function(){}
  useEffect(() => {
    console.log("in useEffect");
    //component did mount logic

    //axios.get() return a promise which resolves or rejects
    // resolve =>triggers .then( (thingReturnedinResolve)=>{} )
    // reject =>triggers .catch( ()=>{})
    axios
      .get("/api/questions")
      .then((response) => {
        console.log(response);
        setQuestions(response.data);
      })
      .catch((error) => {
        alert("error in retrieving questions");
      });

    // axios
    //   .get("/api/questions/:question_id/answers")
    //   .then((response) => {
    //     console.log(response);
    //     setAnswers(response.data);
    //   })
    //   .catch((error) => {
    //     alert("error in retrieving answers");
    //   });

  }, []);
  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <QuestionForm ></QuestionForm>
     
        {questions.map((q) => (
          // array.forEach(element => {
            
          // });
          <h1 key={q.id}>{q.title} {q.body}</h1>
        ))}
      </div>
    </>
  );
};

export default QuestionsDemo;
