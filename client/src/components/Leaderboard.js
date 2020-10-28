import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import {Card} from "semantic-ui-react";


const Leaderboard = () => {
  const { user } = useContext(AuthContext);
  const [ upvotes, setUpvotes ] = useState([]);

  const getLeaderboard = async () => {
      try {
      let res = await Axios.get("/api/top_votes")
      setUpvotes(res.data);
    } catch (error) {
        alert("Failed to get Leaderboard results.");
    }
  }

  const renderLeaderboard = () => {
    return upvotes.map((u) => (
      <Card.Group>
        <Card fluid color='red' header='Option 1'>
        <h1>Leaderboard</h1>
        
        <h4>User Name: {u.first_name} {u.last_name}</h4>
        <h5>Upvotes: {u.total_upvotes}</h5>
        <p dangerouslySetInnerHTML={{__html: u.body}}></p>
        <br />
        </Card>
      </Card.Group>
      
    ));
  };

  useEffect (() => {
    getLeaderboard();
  }, [])

  return (
    <div>
      
        {renderLeaderboard()}
    </div>
  )

}

export default Leaderboard;