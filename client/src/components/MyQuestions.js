import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardMeta, Table, Button, Container, Icon} from 'semantic-ui-react';
import { AuthContext } from "../providers/AuthProvider";
import Leaderboard from "./Leaderboard";

const MyQuestions = (props) => {
  const { user } = useContext(AuthContext);
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
    axios
      .delete(`/api/questions/${id}`, {params:{id:id}})
      .then(res => {
      // window.confirm();
      console.log(res);

      setQuestions(questions.filter((question) => question.id !== id));
    })
  };

  return (
    <>
      <Button>
          <Link to={{pathname: '/AskQuestion'}}>Add a Question</Link>
      </Button>
      <div style={{display:"flex"}}>
        {questions.map((q) => (
        
        <div style={{display:"flex", flexDirection:"column"}}>
          <Link to={{
            pathname: `/questionView/${q.id}`,
            idProps: { question: {...q}}
            }}>
          <Card key={q.id} >
            <Card.Content><h2>{q.title}</h2>
            </Card.Content>
              <CardDescription>from: {q.first_name}</CardDescription>
              <CardMeta dangerouslySetInnerHTML={{__html: q.body}}></CardMeta>
            <Button variant="danger" onClick={() => deleteQuestion(q.id)}>Delete Question</Button>
          </Card></Link>
        </div>
        ))}
        <div style={{margin:"0px", width: "500px"}}>
          <Leaderboard/>
        </div>
      </div> 
    </>
  );
};

export default MyQuestions;

          // array.forEach(element => {
            
          // });