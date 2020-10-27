import React, { useState, useEffect } from "react";
import Axios from "axios";


const Leaderboard = () => {

  const [ upvotes, setUpvotes ] = useState([]);

  const getLeaderboard = async () => {
      try {
      let res = await Axios.get("/api/most_votes")
      setUpvotes(res.data);
    } catch (error) {
        alert("Failed to get Leaderboard results.");
    }
  }

  const renderLeaderboard = () => {
    return upvotes.map((u) => (
      <div>
        <h4>User Name: {u.first_name} {u.last_name}</h4>
        <h5>Upvotes: {u.upvote}</h5>
        <p dangerouslySetInnerHTML={{__html: u.body}}></p>
        <br />
      </div>
      
    ));
  };

  useEffect (() => {
    getLeaderboard();
  }, [])

  return (
    <div>
      <h1>Leaderboard</h1>
        {renderLeaderboard()}
    </div>
  )

}

export default Leaderboard;