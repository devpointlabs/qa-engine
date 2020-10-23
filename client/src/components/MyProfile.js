import React, { useEffect, useState, useContext } from "react";
import Axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react';
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';

const MyProfile = (props) => {
  
  const { user } = useContext(AuthContext);
  const [image, setImage] = useState([]);
  
  
    // console.log("Here's the passed down prop", props.match.params.id);
  
    useEffect(() => {
  
  
    }, []); 

    const displayImage = () => {
     return (
       <div>
         <img src={user.image}/>
       </div>
     )

     };
   


  return (
    <div>
      <h1>User Profile</h1>
      <h3>First Name: {user.first_name}</h3>
      <h3>Last Name: {user.last_name}</h3>
      <h3>Email: {user.email}</h3>
      {displayImage()}
      

      <ImageUploader userID={user.id}/>
    </div>
  );
};

export default MyProfile;
