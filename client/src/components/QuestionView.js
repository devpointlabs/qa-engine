import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import { Card, CardHeader, Button, Grid, Table, Container } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import Answer from "./Answer";
import Comments from "./Comments";
import Upvote from "./Upvote";
import AnswerUpvote from "./AnswerUpvote";
import Leaderboard from "./Leaderboard";
import HighestWeek from "./HighestWeek";



const Question = (props) => {
  const { user } = useContext(AuthContext);
  const [question, setQuestion] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);


  console.log("Here's the passed down prop", props.match.params.id);

  useEffect(() => {

    console.log("useEffect triggered");
    Axios
      .get(`/api/questions/${props.match.params.id}`)
      .then((response) => {
        setQuestion(response.data);
      })
      .catch((error) => {
        alert("error in retrieving questions");
      });

      Axios
        .get(`/api/questions/${props.match.params.id}/answers`)
        .then((response) => {
          setAnswers(response.data);
          console.log("successfully retrieved answers");
        })
        .catch((error) => {
          alert("error in retrieving answers for this question");
      });

  }, []);



    // const getComments = (answer) = {
    //     Axios
    //     .get(`/api/questions/${question.id}/answers/${answer}/comments`)
    //     .then((res) => {
    //       setComments(res.data);
    //       console.log("got Comments");
    //     })
    //     .catch((err) => {
    //       alert("error retrieving comments");
    //     })
    // };

    const addAnswer = (answer) => {
       Axios
        .post(`/api/questions/${question.id}/answers`, answer) 
        .then((res) => {
          setAnswers([...answers, res.data]);
        })
        .catch((err) =>{
          alert("Something went wrong");
      });
    
    }


    // const updateAnswer = (answer) => {

    // }

    const deleteAnswer = (id) => {
      Axios.delete(`/api/questions/${question.id}/answers/${id}`, {params:{id:id}}).then(res => {
        console.log(res);
  
        setAnswers(answers.filter((answer) => answer.id !== id));
      })
    };

    // const answerIsCorrect = (id) => {
    //   Axios.put
    
    // }


    const isUserMatching = () => { //For toggling is_correct if user is owner of question asked.
    if (props.idProps.question.user_id === user.id ){
     return <button variant="danger" onClick={() => props.deleteAnswer(props.aID)}>Delete Answer</button>;
    }
  }


    
    return (
        
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
            <Card fluid>
              <div key={question.id}>
                <CardHeader>
                <h1>Question:</h1>
                <h2>{question.title}</h2><h3>  user: {question.first_name}</h3>
                <br />
                <p dangerouslySetInnerHTML={{__html: question.body}}></p>
                </CardHeader>
                <br />
                <Upvote mString="question" mId={question.id} upvote={question.upvote} question={question}></Upvote>
                <br />
                
                {answers.map((a) => (
                <Card fluid>
                  <div><Answer {...a} aID={a.id} user={user} deleteAnswer={deleteAnswer}/></div>
                </Card>
                ))}
                <h2></h2>
                <AnswerForm addAnswer={addAnswer}  questionID={question.id} user={user}/>
              </div>
            </Card>
            
          </Grid.Column>
        </Grid>

    )
}

export default Question;




//onClick={onAnswerClick(a.id)} 