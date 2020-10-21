import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import QuestionForm from "./QuestionForm";
import { Link } from "react-router-dom";
import { Card, CardDescription, CardHeader, CardMeta } from 'semantic-ui-react';
import { AuthContext } from "../providers/AuthProvider";
import ImageUploader from '../images/ImageUploader';

const User = () => {
  return(
    <div>
      <h1>User profile</h1>
    </div>
  )
};

export default User;
