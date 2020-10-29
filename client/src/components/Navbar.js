import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import {Button,Image} from "semantic-ui-react";
import "../App.css";
import styled from "styled-components";
// For Basic setup only please change

// if not logged in I want register/login links

// if logged in I want logout link, also ProtectRoutes Rendered
const NavBar = () => {
  const history = useHistory();
  const { user, handleLogout } = useContext(AuthContext);


  const myQuestions = () =>{ 
    let path = `/MyQuestions`; 
    history.push(path);
  }

  const allQuestions = () =>{ 
    let path = `/AllQuestions`; 
    history.push(path);
  }

  const myProfile = () =>{ 
    let path = `/MyProfile`; 
    history.push(path);
  }

  const leaderboard = () =>{ 
    let path = `/leaderboard`; 
    history.push(path);
  }

  const highestWeek = () =>{ 
    let path = `/highestWeek`; 
    history.push(path);
  }

  const getRightNav = () => {
    if (user) {
      return (
        <>
          <div style={styles.navbar}>
            <div href="/myprofile">
            
            <Image avatar src={user.image}/>
            
          {user.first_name}
            </div>
            
            <div
            onClick={() => handleLogout(history)}
            style={{ color: "red" }}
            >
            <Button class="ui button navbarButton">logout!</Button>
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
      {user && <Button color='vk' onClick={allQuestions} block style={{color: "white",}}>All Questions</Button>}
            <span style={{ marginRight: "30px" }}></span>
      {user && <Button color='vk' onClick={myQuestions} block style={{color: "white",}}>My Questions</Button>}
            <span style={{ marginRight: "30px" }}></span>
      {user && <Button color='vk' onClick={myProfile} block style={{color: "white",}}>My Profile</Button>}
            <span style={{ marginRight: "30px" }}></span>
      {user && <Button color='vk' onClick={leaderboard} block style={{color: "white",}}>Leaderboard</Button>}
            <span style={{ marginRight: "30px" }}></span>
      {user && <Button color='vk' onClick={highestWeek} block style={{color: "white",}}>Top Weekly Answers</Button>}
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
    textColor: "white",
  },

};




export default NavBar;
