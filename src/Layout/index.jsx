import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./style.css";
import Posts from "../pages/posts";
import Photos from "../pages/photos";
import Todos from "../pages/todos";
import Users from "../pages/users";

export default function Layout() {
  const navigate = useNavigate();
  const [type, setType] = useState("users");
  function LogOut() {
    localStorage.setItem("user", JSON.stringify(false));
    navigate("/");
  }
  function handleSubmit(e) {
    setType(e.target.value);
  }
  return (
    <>
      <header className="container">
        <select
          onChange={handleSubmit}
          id="select"
          className="form-select select form-select-lg mb-3"
          aria-label="Large select example"
        >
          <option className="option_item" value="users">
            Users
          </option>
          <option className="option_item" value="todos">
            Todos
          </option>
          <option className="option_item" value="posts">
            Posts
          </option>
          <option className="option_item" value="photos">
            Photos
          </option>
        </select>
        <button onClick={LogOut} className="log-out">
          <i className="fa-solid fa-right-from-bracket"></i> Log Out{" "}
        </button>
      </header>
      <main>
        <Outlet />
        {type === "users" ? <Users /> : null}
        {type === "todos" ? <Todos /> : null}
        {type === "posts" ? <Posts /> : null}
        {type === "photos" ? <Photos /> : null}
      </main>
      <footer></footer>
    </>
  );
}
