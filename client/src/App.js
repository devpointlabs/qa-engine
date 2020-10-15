import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import ThingsDemo from "./things/ThingsDemo";
import { Container } from "semantic-ui-react";
import Register from "./components/Register";
import Login from "./components/Login";
import FetchUser from "./components/FetchUser";
import ProtecedRoute from "./components/ProtectedRoute";
import QuestionsDemo from "./components/QuestionsDemo";
import QuestionForm from "./components/QuestionForm";
import QuestionView from "./components/QuestionView";
import Answer from "./components/Answer";
import AnswerForm from "./components/AnswerForm";
// import Login from "./components/Login";
// import User from "./components/User";

// anything in fetchuser will be hidden while that checkuser function is running

function App() {
  return (
    <>
      <NavBar />

      <Container>
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/questionView/:id" component={QuestionView} />
            <ProtecedRoute exact path="/thingsDemo" component={ThingsDemo} />
            <ProtecedRoute exact path="/questionsDemo" component={QuestionsDemo} />
            <ProtecedRoute exact path="/questions/new" component={QuestionForm} />
            {/* <ProtecedRoute exact path="/user" component={User} /> */}
          </Switch>
        </FetchUser>
      </Container>
    </>
  );
}

export default App;
