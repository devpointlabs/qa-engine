import React from "react";
import axios from 'axios';
import AllQuestions from './AllQuestions';
import { Input, Button, Form } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  state = { search: null, questions: [], searched: false };
  searchQuestions = (e, search) => {
    e.preventDefault();
    axios.get(`/api/search_questions?search=${search}`).then((res) => {
      this.setState({ questions: res.data });
      this.setState({ searched: true });
    });
  };
  handleSearchChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    if (value === "") {
      this.clearSearch(value);
    }
  };
  componentWillUpdate() {
    this.props.history.listen((location, action) => {
      if (action === "PUSH") {
        // debugger
        console.log("Hit");
        this.clearSearch();
        // this.setState({search: null, boozes: [], drinks: []})
      }
      console.log(location, action);
      // Do stuff.
    });
  }

  //Check later
  clearSearch = (searchValue) => {
    if (searchValue === "" || searchValue === undefined) {
      // debugger
      this.setState({ search: "", questions: [], searched: false });
      // this.setState({ drinks: [] });
      // this.setState({ boozes: [] });
      // this.setState({ searched: false });
    }
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "1em",
          }}
        >
          {/* <img src={image} style={{ width: "4em", height: "5em" }} /> */}
          {/* Search Me */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: ".5em",
            }}
          >
            <Form>
              <Input
                placeholder="Search all questions"
                onChange={this.handleSearchChange}
                value={this.state.search}
                name="search"
              />
              <Button
                onClick={(e) => this.searchQuestions(e, this.state.search)}
              >
                Search
              </Button>
            </Form>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* RESULTS */}
          
          {this.state.searched ? (
            this.state.questions.length > 0 ? (
              <AllQuestions />
            ) : (
              "No keywords found "
            )
          ) : null}
        </div>
      </div>
    );
  }
}
export default withRouter(SearchBar);
