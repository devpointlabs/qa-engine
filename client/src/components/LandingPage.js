import React from "react";
import { useHistory } from "react-router-dom";
import {Button, Container} from "semantic-ui-react";

const LandingPage = () => {
  const history = useHistory();

  const login = () =>{ 
    let path = `login`; 
    history.push(path);
  }
  
  const register = () =>{ 
    let path = `register`; 
    history.push(path);
  }
  
  
  return(
  
  <div style={styles.landing}>
    <div style={styles.wrapper}>
      <div style={styles.container}>
        
        <img src={`https://res.cloudinary.com/dbbgin0ik/image/upload/v1603873823/Slack_Overflow_1x_wg7u1m.png`}/>
        <Button onClick={login} variant="info" block style={{color: "white",}}>Login</Button>
        <Button onClick={register} variant="success" block style={{color: "white",}}>Sign Up</Button>
        
      </div>
    </div>
  </div>
  
  
  )
}

const styles = {
  landing: {
    fontFamily: "Roboto"
  },
  wrapper: {
    width: "auto",
    height: "auto",
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    height: "auto",
    width: "auto",
    
    alignItems: "center",
    
   
  },


};

export default LandingPage;