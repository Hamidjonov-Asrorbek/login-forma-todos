import React, { useEffect, useState } from "react";
import loadergif from "/src/assets/loader.gif";
import "/src/App.css";

function Todos() {
  const [data, setUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.slice(0, 20));
        setLoader(false);
      });
  }, []);
  return (
    <main className="container">
      {loader && <img src={loadergif} className="loader"></img>}
      {data && <h1>Todos</h1>}
      <ul
        id="list-group-todo"
        className="list-group d-flex justify-content-between"
      >
        {data.length &&
          data.map(({ id, title }, ind) => {
            title =
              title[0].toLocaleUpperCase() + title.slice(1).toLocaleLowerCase();
            return (
              <li className="list-group-item todos_li" key={ind}>
                <p>{id}.</p>
                <p>{title}</p>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default Todos;
