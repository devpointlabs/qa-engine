import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardMeta, Table, Button, Container, Icon, Grid} from 'semantic-ui-react';
import { AuthContext } from "../providers/AuthProvider";
import Leaderboard from "./Leaderboard";
import HighestWeek from './HighestWeek';
import Upvote from "./Upvote";

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
      <Grid>

        <Grid.Column width={5}>
              <Grid.Row>
              <Leaderboard />
              <br />
              <br />
              </Grid.Row>
              <Grid.Row>
              <HighestWeek />
              </Grid.Row>
        </Grid.Column>
        <Grid.Column width={11}>
        <h1>Submitted Questions:</h1>
        <br/>
        <Button>
          <Link to={{pathname: '/AskQuestion'}}>New Question</Link>
        </Button>
        <br/>
        <br/>
          {questions.map((q) => (
            <Link to={{
              pathname: `/questionView/${q.id}`,
              idProps: { question: {...q}}
              }}>
              <Card fluid key={q.id} >
                <Card.Header>
                  <h1>Question</h1>
                  <h4>User: {user.first_name}</h4>
                  <h2>{q.title}</h2>
                  <p dangerouslySetInnerHTML={{__html: q.body}}></p>
                </Card.Header>
                <br/>
                <div style={{display:"flex"}}>
                <Upvote mString="question" mId={q.id} upvote={q.upvote} question={q}></Upvote>
                <Button variant="danger" onClick={() => deleteQuestion(q.id)}>Delete Question</Button>
                </div>
              </Card>
            </Link>
          ))}
          
        </Grid.Column>
      </Grid>
    </>
  );
};

export default MyQuestions;
