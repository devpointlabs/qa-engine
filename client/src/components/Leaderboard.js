import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../providers/AuthProvider";


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
      <div>
        <h4>User Name: {u.first_name} {u.last_name}</h4>
<<<<<<< HEAD
        <h5>Upvotes: {u.upvote}</h5>
        <p dangerouslySetInnerHTML={{__html: u.body}}></p>
=======
        <h5>Upvotes: {u.total_upvotes}</h5>
        <p>{u.body}</p>
>>>>>>> b4d8e4db70988ab96502be5e40dc43322068abbc
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