import React from "react";
import { Route, Switch } from "react-router-dom";
import AllQuestions from "./components/AllQuestions";
import NavBar from "./components/Navbar";
import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtecedRoute from "./components/ProtectedRoute";
import MyQuestions from "./components/MyQuestions";
import QuestionForm from "./components/QuestionForm";
import QuestionView from "./components/QuestionView";
import Answer from "./components/Answer";
import AnswerForm from "./components/AnswerForm";
import Upvote from "./components/Upvote"

import MyProfile from "./components/MyProfile";


// import Login from "./components/Login";
// import User from "./components/User";
import "./App.css";
// anything in fetchuser will be hidden while that checkuser function is running

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={AllQuestions} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/questionView/:id" component={QuestionView} />
            <Route exact path="/upvote" component={Upvote} />
            <ProtecedRoute exact path="/MyQuestions" component={MyQuestions} />
            <ProtecedRoute exact path="/questions/new" component={QuestionForm} />
            <ProtecedRoute exact path="/myprofile" component={MyProfile}/>
            {/* <ProtecedRoute exact path="/user" component={User} /> */}
          </Switch>
        </FetchUser>
      </Container>
    </>
  );
}

export default App;
