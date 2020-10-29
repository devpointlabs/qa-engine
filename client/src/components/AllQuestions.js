import React, { useEffect, useState, useContext } from "react";
import { Card, CardHeader, CardMeta, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import Upvote from "./Upvote";
import SearchBar from './SearchBar';
import Leaderboard from "./Leaderboard";
import HighestWeek from "./HighestWeek";



const AllQuestions = (props) => {
  const { user } = useContext(AuthContext);
  const [ questions, setQuestions ] = useState([]);
  // const [question, setQuestion] = useState([]);

  useEffect(() => {

    if(props.searchResults) {
    setQuestions(props.searchResults)
    }
    else {

    console.log("useEffect triggered");
    
    Axios
    
      .get(`/api/all_questions`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        alert("error in retrieving questions");
      });
    }

    }, []);
  

  return (
    <div>
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
            <h1>All Questions</h1>
            <br />
            <SearchBar />
                {questions.map((q) => (
                  
                    <Card fluid key={q.id}>

                      <h3><CardHeader><Link to={{
                      pathname: `/questionView/${q.id}`,
                      idProps: { question: {...q}}
                      }}>{q.title}</Link></CardHeader></h3>
                    <CardMeta dangerouslySetInnerHTML={{__html:q.body}}></CardMeta>
                    
                    </Card>
                ))}
          </Grid.Column>
        </Grid>
    </div>
  )
};

export default AllQuestions;
