import React, { useState, useEffect } from "react";
import "./Post.css";

const postData = require("../data/post.json");
const authorsData = require("../data/authors.json");

function Post() {
  const [posts, setPosts] = useState([...postData]);
  const [authors, setAuthors] = useState([...authorsData]);



  console.log(posts);
  console.log(authors);




  return (
    <div className="post-container">
      <h2>Your current timezone is: Asia/Bangkok</h2>
      <div className="post-group">
        {posts.map((post, index) => {
          if (index % 2 === 0) {
            return (
              <div className="post-item" key={post.id}>
                <div className="user">
                  <img
                    src={authors[post.author_id - 1].avatar_url}
                    alt="avatar"
                  />
                  <h4 className="user-name">
                    {authors[post.author_id - 1].name}{" "}
                    <span className="time">
                      posted on {convertDate(post.created_at)}{" "}
                    </span>
                  </h4>
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
          } else {
            return (
              <div className="add-color" key={post.id}>
                <div className="user">
                  <img
                    src={authors[post.author_id - 1].avatar_url}
                    alt="avatar"
                  />
                  <h4 className="user-name">
                    {authors[post.author_id - 1].name}{" "}
                    <span className="time">
                      posted on {convertDate(post.created_at)}{" "}
                    </span>
                  </h4>
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
          }
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
  let shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let shortMonth = shortMonths[date.getMonth()];
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  // console.log("hours", hours);
  let formattedHours = hours.toString().padStart(2, "0");
  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedDate =
    day +
    ", " +
    shortMonth +
    " " +
    date.getDate() +
    ", " +
    year +
    ", " +
    formattedHours +
    ":" +
    formattedMinutes;
  // console.log(formattedDate);
  return formattedDate;
}



export default Post;
