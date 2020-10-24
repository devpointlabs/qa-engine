import React from "react";
import Upvote from "./Upvote"

const Comment = (props) => {

  return (
    <div>

      <p>User {props.first_name}:</p>
      <p dangerouslySetInnerHTML={{__html:props.body}}></p><Upvote mString="comment" mId={props.id} upvote={props.upvote} answer={props} />

    </div>
  )
}

export default Comment;