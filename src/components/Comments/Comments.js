import React, { useState } from "react";
import "./Comments.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";

function Comments() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  function postCommentHandler(event) {
    event.preventDefault();

    setComments((prevState) => [...prevState, comment]);

    setComment("");
  }

  return (
    <div className="comments">
      <h2>Comments</h2>
      <div className="inputComment">
        <Avatar className="avatar" />
        <form>
          <input
            placeholder="Add a comment..."
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && (
            <Button
              variant="contained"
              onClick={postCommentHandler}
              type="submit"
            >
              Post
            </Button>
          )}
        </form>
      </div>
      <p
        className="commentToggle"
        onClick={() => setShowComments(!showComments)}
      >
        {showComments ? "Hide" : "Show"} Comments
      </p>
      {showComments &&
        comments.map((theComment) => {
          return (
            <div className="userComment">
              <Avatar className="userComment_avatar" />
              <div className="userComment_text">
                <h4>Swapnil Singh</h4>
                <p>{theComment}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
