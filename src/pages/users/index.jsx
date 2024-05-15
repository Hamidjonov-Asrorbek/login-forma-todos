import React, { useEffect, useState } from "react";
import loadergif from "/src/assets/loader.gif";
import "/src/App.css";
function Users() {
  const [data, setUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoader(false);
      });
  }, []);
  return (
    <main className="container">
      {loader && <img src={loadergif} className="loader"></img>}
      {data && <h1>Users</h1>}
      <ul
        id="list-group-todo"
        className="list-group d-flex justify-content-between"
      >
        {data.length &&
          data.map(({ id, name, username, email, phone, website }, ind) => {
            return (
              <li className="users_li" key={ind}>
                <div className="user-text">
                  <div className="posts_tit">
                    <h6>{id}.</h6>
                    <h6>
                      {name} {username}
                    </h6>
                  </div>
                  <p>
                    Email: <a href="">{email}</a>
                  </p>
                  <p>
                    Phone: <a href="">{phone}</a>
                  </p>
                  <p>
                    Website: <a href="">{website}</a>
                  </p>
                </div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDcaqhuc9hsM1FwGMd7AJFWyR13l42gfF-LqoC3PgcQ&s"
                  width="200"
                  alt="image"
                ></img>
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default Users;
