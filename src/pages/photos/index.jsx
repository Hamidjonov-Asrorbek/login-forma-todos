import React, { useEffect, useState } from "react";
import loadergif from "/src/assets/loader.gif";
import "/src/App.css";

function Photos() {
  const [data, setUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.slice(0, 20));
        setLoader(false);
      });
  }, []);
  return (
    <main className="container">
      {loader && <img src={loadergif} className="loader"></img>}
      {data && <h1>Photos</h1>}
      <ul
        id="list-group-todo"
        className="list-group d-flex justify-content-between"
      >
        {data.length &&
          data.map(({ thumbnailUrl, title, id }, ind) => {
            title =
              title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
            return (
              <li className="list-group-item todos_li" key={ind}>
                <img src={thumbnailUrl} alt="image"></img>
                <div className="posts_tit">
                  <h6>{id}.</h6>
                  <h6>{title}</h6>
                </div>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default Photos;
