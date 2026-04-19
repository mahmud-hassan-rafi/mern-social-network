import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from "../utils/toast/ToastNotify";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userInfo;
    const errors = [];

    if (!email) errors.push("Email");
    if (!password) errors.push("Password");

    if (errors.length > 0) {
      const msg = `${errors.join(", ")} is required`;
      errorNotify(msg);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfo),
          credentials: "include",
        },
      );
      const data = await res.json();
      if (!res.ok) {
        errorNotify(data.message);
        setIsLoading(false);
        return;
      }
      successNotify(data.message);
      // Give a small delay to ensure cookie is set before navigation
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 500);
    } catch (error) {
      errorNotify(error.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <div>
        <h1>facebook</h1>
        <p>
          Connects with friends and the world <br />
          around you on facebook
        </p>
      </div>
      <div className="form">
        <form onSubmit={handleLoginFormSubmit}>
          <input
            type={`${!parseInt(userInfo.email) ? "email" : "number"}`}
            name="Number/Email"
            value={userInfo.email}
            placeholder="Email or phone number"
            disabled={isLoading}
            onChange={(event) => {
              const updatedValue = {
                ...userInfo,
                email: event.target.value,
              };
              setUserInfo(updatedValue);
            }}
          />
          <input
            type="password"
            name="password"
            value={userInfo.password}
            placeholder="Password"
            disabled={isLoading}
            onChange={(event) => {
              const updatedValue = {
                ...userInfo,
                password: event.target.value,
              };
              setUserInfo(updatedValue);
            }}
          />
          <button type="submit" className="loginBtn" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <span>
          <p>forgot password?</p>
          <hr />
          <button
            className="signupBtn"
            onClick={() => {
              navigate("/register");
            }}
            disabled={isLoading}
          >
            Create new account
          </button>
        </span>
      </div>
    </div>
  );
};

export default Login;
