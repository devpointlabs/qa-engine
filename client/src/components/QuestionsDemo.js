import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react';
{}
const QuestionsDemo = () => {
  const [questions, setQuestions] = useState([]);
  // const [answers, setAnswers] = useState([]);

  const handleClick = (e) => {
    // setQuestions({ [e.target.value]})
  }

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

  const addQuestion = (question) => {
    axios
      .post(`/api/questions`, question)
      .then((res) => {
        setQuestions([...questions, res.data]);
        // history.push(res.data)
      })
      .catch((err) =>{
        alert("Something went wrong");
    });
  };

  const deleteQuestion = (id) => {
    axios.delete(`/api/questions/${id}`, {params:{id:id}}).then(res => {
      console.log(res);

      setQuestions(questions.filter((question) => question.id !== id));
    })
  };

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <QuestionForm addQuestion={addQuestion} />
           <br />
        <br />
        {questions.map((q) => (
          <div>
            <Card key={q.id}>
              <h3><CardHeader><Link to={{
              pathname: `/questionView/${q.id}`,
              idProps: { question: {...q}}
              }}>{q.title}</Link></CardHeader></h3>
            <CardMeta>{q.body}</CardMeta>
            </Card>
            <button variant="danger" onClick={() => deleteQuestion(q.id)}>Delete Question</button>
            </div>
        ))}
      </div>
    </>
  );
};

export default QuestionsDemo;

          // array.forEach(element => {
            
          // });