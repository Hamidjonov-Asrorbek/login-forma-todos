import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const [error, errorMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const username = useRef("");
    const password = useRef("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault()
        let userName = username.current.value.trim();
        let passWord = password.current.value.trim();

        const data = JSON.parse(localStorage.getItem("usersData")) ?? [];
        
        const user = data.filter(({username, password}) =>{
          return username === userName && password == passWord;
        })
        
        if(user.length){
            localStorage.setItem('user', JSON.stringify(true));
            navigate("/layout");
          }
          else{
            username.current.value = "";
            password.current.value = "";
            errorMessage(true);
            setMessage('Login or password incorrect !');
            setTimeout(() => {
              errorMessage(false);
            }, 2000);
            localStorage.setItem('user', JSON.stringify(false));
        }
    } 


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label htmlFor="chk" aria-hidden="true">
          Login
        </label>
        <input ref={username} minLength={8} type="text" name="text" placeholder="Username" required/>
        <div className="pass_div">
        <input ref={password} minLength={8} type={showPassword ? "text" : "password"} name="pswd" placeholder="Password" required/> { showPassword ? <FaEye onClick={() => setShowPassword((prev) => !prev)} className="pass_icon"/> : <FaEyeSlash onClick={() => setShowPassword((prev) => !prev)} className="pass_icon"/>}
        </div>
        <button type="submit">Login</button>
        {error && <h6 className="error-text">{message}</h6>}
      </form>
    </div>
  );
}

export default Login;
