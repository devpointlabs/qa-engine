import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';
import { Card, Icon, Image } from 'semantic-ui-react'

const MyProfile = (props) => {
  
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState([]);
  
  
    // console.log("Here's the passed down prop", props.match.params.id);
  
    useEffect(() => {
  
  
    }, []); 

  
    function refreshPage() {
      window.location.reload(false);
    }


  return (
    <Card 
      style={{
        width: "350px",
        marginLeft: "-50px",
      }}
    >
      <Image src={user.image}/>
      <Card.Content textAlign="center">
        <h1>My Profile</h1>
          <h2>Name: {user.first_name} {user.last_name}</h2>
          <h2>Email: {user.email}</h2>
        
          
          <button>Edit Info</button>
          
         
          <br/>
          <br/>
          <br/>
          Add or update current photo
          <ImageUploader userID={user.id}/>
        
      </Card.Content>
    </Card>
  );
};

export default MyProfile;
