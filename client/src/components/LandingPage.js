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
        
        <img src={`https://res.cloudinary.com/dbbgin0ik/image/upload/v1603873823/Slack_Overflow_1x_wg7u1m.png`}/>
        <Button color='vk' textAlign="center" onClick={login} variant="info" block style={{color: "white",}}>Login</Button>
        <Button color='vk' textAlign="center" onClick={register} variant="success" block style={{color: "white",}}>Sign Up</Button>
        
      <br/>
      <br/>
        <div>
        <Grid divided='vertically'>
        <Grid.Row columns={3}>
      <Grid.Column>
      <div textAlign="center">
          <Icon name='check circle outline' size='big' />
          <h2>Ask Questions</h2>
          <h4>I am helping</h4>
          </div>
      </Grid.Column>
      <Grid.Column>
      <div textAlign="center">
          <Icon name='check circle outline' size='big' />
          <h2>Solve Problems</h2>
          <h4>HElp</h4>
          </div>
      </Grid.Column>
      <Grid.Column>
          <div textAlign="center">
          <Icon name='check circle outline' size='big' />
          <h2>Rate Answers</h2>
          <h4>grrrrr</h4>
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


};

export default LandingPage;