import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Button,Image} from "semantic-ui-react";
import SearchBar from './SearchBar';
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
          <div>
            <div>
            <a href="/myprofile">
            <Image avatar src={user.image}/>
            </a>
            <Button onClick={() => handleLogout(history)} class="ui button navbarButton">Logout!</Button>
            </div>
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
      <Button color="" ><Link to="/AllQuestions">All Questions</Link></Button>
        {/* <span style={{ marginRight: "10px" }}></span>
        {user && <Link to="/thingsDemo">Things</Link>} */}
            <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/MyQuestions">My Questions</Link></Button>}
            <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/MyProfile">My Profile</Link></Button>}
            <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/leaderboard">Leaderboard</Link></Button>}
            <span style={{ marginRight: "30px" }}></span>
      {<Button class="ui button"> <Link to="/highestWeek">Top Weekly Answers</Link></Button>}
            <span style={{ marginRight: "30px" }}></span>
      <SearchBar/>
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
