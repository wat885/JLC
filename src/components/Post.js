import React, { useState, useEffect } from "react";
import "./Post.css";

const postData = require("../data/post.json");
const authorsData = require("../data/authors.json");

function Post() {
  const [posts, setPosts] = useState([...postData]);
  const [authors, setAuthors] = useState([...authorsData]);

  console.log(posts);
  console.log(authors);

  console.log(authors[1].avatar_url);

  return (
    <div className="post-container">
      <h2>Your current timezone is: Asia/Bangkok</h2>
      <div className="post-group">
        {posts.map((post) => {
          return (
            <div className="post-item" key={post.id}>
              <div className="user">
                <img
                  src={authors[post.author_id - 1].avatar_url}
                  alt="avatar"
                />
                <h4 className="user-name">
                  {authors[post.author_id - 1].name}{" "}
                </h4>
                <h4 className="time">posted on {convertDate(post.created_at)} </h4>
              </div>
              <hr />
              <div className="content">
                <img src={post.image_url} />
                <div className="right-content">
                  <h3 className="toppic">{post.title}</h3>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function convertDate(dateString) {
  // let dateString = "2020-05-08T17:01:15Z";
  let date = new Date(dateString);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getUTCDay()];
  let month = date.getUTCMonth();
  let year = date.getUTCFullYear();
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let formattedDate =
    day +
    ", " +
    month +
    " " +
    date.getUTCDate() +
    ", " +
    year +
    ", " +
    hours +
    ":" +
    minutes;
  console.log(formattedDate);
  return formattedDate;
}

export default Post;
