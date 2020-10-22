import React from "react";

const Comment = (props) => {

  return (
    <div>
      <p>User {props.first_name}: {props.children}</p>
    </div>
  )
}

export default Comment;