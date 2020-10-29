import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Card } from "semantic-ui-react";


const HighestWeek = () => {

  const [ upvotes, setUpvotes ] = useState([]);

  const getLeaderboard = async () => {
      try {
      let res = await Axios.get("/api/most_votes")
      setUpvotes(res.data);
    } catch (error) {
        alert("Failed to get this week's scores.");
    }
  }

  const renderLeaderboard = () => {
    return upvotes.map((u) => (
      <div>
      <Card.Group>
        <Card fluid>
        
        
        <h4>User Name: {u.first_name} {u.last_name}</h4>
        <h5>Upvotes: {u.upvote}</h5>
        <p dangerouslySetInnerHTML={{__html: u.body}}></p>
        <br />
        </Card>
      </Card.Group>
      </div>
      
    ));
  };

  useEffect (() => {
    getLeaderboard();
  }, [])

  return (
    <div>
      <h1>Best Answers This Week</h1>
      {renderLeaderboard()}
    </div>
  )

}

export default HighestWeek;