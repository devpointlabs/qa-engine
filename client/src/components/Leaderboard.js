import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import {Card, Table} from "semantic-ui-react";



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
        
      <Table.Row>
        <Table.Cell>
        {u.first_name} {u.last_name}
        </Table.Cell>
        <Table.Cell>{u.total_upvotes}</Table.Cell>
      </Table.Row>

      
    ));
  };

  useEffect (() => {
    getLeaderboard();
  }, [])

  return (
    <div>
        <h1>Leaderboard</h1>
      <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {renderLeaderboard()}
    </Table.Body>
    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
    </div>
  )

}

export default Leaderboard;


      