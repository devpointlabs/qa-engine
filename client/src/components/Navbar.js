import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Button} from "semantic-ui-react";
import styled from "styled-components";
// For Basic setup only please change

// if not logged in I want register/login links

// if logged in I want logout link, also ProtectRoutes Rendered
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);

  const getRightNav = () => {
    if (user) {
      return (
        <>
          {/* part 2 what I am badly here Instant Bug */}
          <div
            onClick={() => handleLogout(history)}
            style={{ color: "steelblue" }}
          >
            logout!
          </div>
        </>
      );
    } else {
      return (
        <>
          <Link to="/register">register</Link>
          <span style={{ marginRight: "10px" }}></span>
          <Link to="/login">login</Link>
        </>
      );
    }
  };

  return (
    <div style={styles.navbar}>
      <div >
      <Button color="" ><Link to="/">All Questions</Link></Button>
        {/* <span style={{ marginRight: "10px" }}></span>
        {user && <Link to="/thingsDemo">Things</Link>} */}
        <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/MyQuestions">My Questions</Link></Button>}
      <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/MyProfile">My Profile</Link></Button>}
            <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/leaderboard">Leaderboard</Link></Button>}
      </div>
      <div>{getRightNav()}</div>
    </div>
  );
};


const styles = {
  navbar: {
    
    width: "98%",
    background: "#FFFFFF",
    fontFamily: "Roboto",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    dropShadow: "",
    border: "1px solid #979797",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.5)",
    margin: "10px",
  },

  Button: {
    ButtonColor: "black",
    textColor: "white",
  }
};

export default NavBar;
