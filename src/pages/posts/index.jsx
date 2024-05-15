import React, { useEffect, useState } from "react";
import loadergif from "/src/assets/loader.gif";
import "/src/App.css";

function Posts() {
  const [data, setUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.slice(0, 20));
        setLoader(false);
      });
  }, []);
  return (
    <main className="container">
      {data && <h1>Posts</h1>}
      {loader && <img src={loadergif} className="loader"></img>}
      <ul
        id="list-group-todo"
        className="list-group d-flex justify-content-between"
      >
        {data.length &&
          data.map(({ id, userId, title, body }, ind) => {
            title =
              title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
            body =
              body[0].toLocaleUpperCase() + body.slice(1).toLocaleLowerCase();
            return (
              <li className="posts_li" key={ind}>
                <div className="posts_tit">
                  <h6>{id}.</h6>
                  <h6>{title}</h6>
                </div>
                <p>{body}</p>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default Posts;
