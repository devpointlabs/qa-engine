import React from "react";
import { useHistory } from "react-router-dom";
import {Grid, Button, Container, Icon} from "semantic-ui-react";

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
      <div style={styles.buttonRow}>
        <img src={`https://res.cloudinary.com/dbbgin0ik/image/upload/v1603873823/Slack_Overflow_1x_wg7u1m.png`}/>
        </div>
        <div>
        <Grid divided='vertically'>
        <Grid.Row columns={2}>
      <Grid.Column>
      <div style={styles.buttonRow}>
      <Button color='vk' textAlign="center" onClick={login} variant="info" block style={{color: "white",}}>Login</Button>
      </div>
      </Grid.Column>
      <Grid.Column>
      <div style={styles.buttonRow}>
      <Button color='vk' textAlign="center" onClick={register} variant="success" block style={{color: "white",}}>Sign Up</Button>
      </div>
      </Grid.Column>
    </Grid.Row>

        <Grid.Row columns={3}>
      <Grid.Column textAlign="center">
          <div>
          <Icon name='check circle outline' color='blue' size='big' />
          <h2>Ask Questions</h2>
          <h4>Learn how to ask questions in an open online format</h4>
          </div>
      </Grid.Column>
      <Grid.Column textAlign="center">
      <div>
          <Icon name='check circle outline' color='blue' size='big' />
          <h2>Solve Problems</h2>
          <h4>Earn points for helping your peers</h4>
          </div>
      </Grid.Column>
      <Grid.Column textAlign="center">
          <div >
          <Icon name='check circle outline' color='blue' size='big' />
          <h2>Get on the Leaderboard</h2>
          <h4>Earn prizes for having answers with the most likes</h4>
          </div>
      </Grid.Column>
    </Grid.Row>
  </Grid>
          
          
  

        </div>
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
  buttonRow:{
    display:"flex",
    justifyContent:"center",
    width:"100%"
  }


};

export default LandingPage;