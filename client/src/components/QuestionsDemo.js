import React, { useEffect, useState } from "react";
import axios from "axios";

const QuestionsDemo = () => {
  const [questions, setQuestions] = useState([]);

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
  }, []);
  return (
    <>
      <div>

     
        {questions.map((q) => (
          <h1 key={q.id}>{q.title} {q.body}</h1>
        ))}
      </div>
    </>
  );
};

export default QuestionsDemo;
