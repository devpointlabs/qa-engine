import React, { useEffect, useState, useContext } from "react";
import { Card, CardHeader, CardMeta, Grid, Image } from "semantic-ui-react";
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

    const SearchView = () => {
      return (
        <>
          {questions.map((q) => (
                  
                  <Card fluid key={q.id}>

                    <h3><CardHeader><Link to={{
                    pathname: `/questionView/${q.id}`,
                    idProps: { question: {...q}}
                    }}>{q.title}</Link></CardHeader></h3>
                  <CardMeta dangerouslySetInnerHTML={{__html:q.body}}></CardMeta>
                  
                  </Card>
              ))}   
        </>
      )
    }

    const RegularView = () => {
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
          <h1>All Questions</h1>
          <br />
          <SearchBar />
              {questions.map((q) => (
                  <Link to={{
                    pathname: `/questionView/${q.id}`,
                    idProps: { question: {...q}}
                    }}>
                    <Card fluid key={q.id}>

                      <h3><CardHeader>{q.title}</CardHeader></h3>
                    <CardMeta 
                    dangerouslySetInnerHTML={{__html:q.body}}></CardMeta>
                    <p>{q.first_name}</p>
                    
                    </Card>
                  </Link>
              ))}
        </Grid.Column>
      </Grid>

      )
    }
  

  return (
    <div>
      {props.searchResults ? SearchView() : RegularView()}
    </div>
  )
};

export default AllQuestions;
