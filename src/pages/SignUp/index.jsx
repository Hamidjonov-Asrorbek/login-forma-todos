import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userInput);

    const data = JSON.parse(localStorage.getItem("usersData")) ?? [];
    localStorage.setItem("usersData", JSON.stringify([...data, userInput]));

    setUserInput({
      username: "",
      email: "",
      password: "",
    });

    navigate("/layout");
  }
  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Sign up
        </label>
        <input
          type="text"
          minLength={8}
          onChange={(e) =>
            setUserInput((prev) => ({
              ...prev,
              username: e.target.value.trim(),
            }))
          }
          value={userInput.username}
          placeholder="Username"
          required=""
        />
        <input
          type="email"
          minLength={12}
          onChange={(e) =>
            setUserInput((prev) => ({ ...prev, email: e.target.value.trim() }))
          }
          value={userInput.email}
          placeholder="Email"
          required=""
        />
        <div className="pass_div">
          <input
            type={showPassword ? "text" : "password"}
            minLength={8}
            onChange={(e) =>
              setUserInput((prev) => ({
                ...prev,
                password: e.target.value.trim(),
              }))
            }
            value={userInput.password}
            placeholder="Password"
            required=""
          />
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword((prev) => !prev)}
              className="pass_icon"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword((prev) => !prev)}
              className="pass_icon"
            />
          )}
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
