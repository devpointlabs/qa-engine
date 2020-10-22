import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import AnswerForm from "./AnswerForm";
import { Card, CardHeader, Button } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";
import Answer from "./Answer";
import Comments from "./Comments";



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
          // history.push(res.data)
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


    // const onAnswerClick = (answer) => {
    //   getComments(answer);
      
    // }


    
    return (
      <div key={question.id}>
        <h1>Question:</h1>
        <h2>{question.title}</h2><h4>  user: {question.first_name}</h4>
        <br />
        <p dangerouslySetInnerHTML={{__html: question.body}}></p>
        <br />
        <br />
        {answers.map((a) => (
        
          <Answer {...a} aID={a.id} user={user} deleteAnswer={deleteAnswer}/>
          
            // {show && <Comments questionID={question.id} answerID={a.id} />}
          //<Button onClick={() => setShow(!show)}>{show ? "Hide Comments" : "Comments"}</Button>
       
        ))}
        <h2></h2>
        <AnswerForm addAnswer={addAnswer}  questionID={question.id} user={user}/>
      </div>
    )
}

export default Question;




//onClick={onAnswerClick(a.id)} 