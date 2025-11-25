import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from "../utils/toast/ToastNotify";

const Register = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    surname: "",
    email: "",
    password: "",
    birthday: "",
    gender: "",
  });

  const handleSignupFormSubmit = async (event) => {
    event.preventDefault();
    const { firstname, surname, email, password, birthday, gender } = userInfo;
    const errors = [];
    if (!firstname && !surname && !email && !password && !birthday && !gender) {
      errorNotify("Please fill the form first");
      return;
    }
    if (!firstname) errors.push("Firstname");
    if (!surname) errors.push("Surname");
    if (!email) errors.push("Email");
    if (!password) errors.push("Password");
    if (!birthday) errors.push("Birth date");
    if (!gender) errors.push("Gender");

    if (errors.length > 0 && errors.length < 4) {
      const msg = `${errors.join(", ")} is required`;
      errorNotify(msg);
      return;
    } else if (errors.length > 3) {
      errorNotify("Please fill the form first");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInfo),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        errorNotify(data.message);
        return;
      }
      successNotify(data.message);
      navigate("/");
    } catch (error) {
      errorNotify(error.message);
    }
  };
  return (
    <div className="signupContainer">
      <div>
        <h1>facebook</h1>
        <p>
          Facebook helps you connect and share with the <br />
          people in your life
        </p>
      </div>
      <div className="form">
        <h2>Create your account</h2>
        <p>it's quick and easy</p>
        <form onSubmit={handleSignupFormSubmit}>
          <span>
            <input
              type="text"
              placeholder="first name"
              value={userInfo.firstname}
              onChange={(event) => {
                let updatedUser = {
                  ...userInfo,
                  firstname: event.target.value,
                };
                setUserInfo(updatedUser);
              }}
            />
            <input
              type="text"
              placeholder="surname"
              value={userInfo.surname}
              onChange={(event) => {
                let updatedUser = { ...userInfo, surname: event.target.value };
                setUserInfo(updatedUser);
              }}
            />
          </span>
          <input
            type={`${!parseInt(userInfo.email) ? "email" : "number"}`}
            placeholder="Email or phone number"
            value={userInfo.email}
            onChange={(event) => {
              let updatedUser = { ...userInfo, email: event.target.value };
              setUserInfo(updatedUser);
            }}
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={userInfo.password}
            onChange={(event) => {
              let updatedUser = { ...userInfo, password: event.target.value };
              setUserInfo(updatedUser);
            }}
          />
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            name=""
            id="birthday"
            value={userInfo.birthday}
            onChange={(event) => {
              let updatedUser = { ...userInfo, birthday: event.target.value };
              setUserInfo(updatedUser);
            }}
          />
          <span>
            <h6 htmlFor="gender">Gender</h6>
            <label htmlFor="male">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                onChange={(event) => {
                  let updatedUser = { ...userInfo, gender: event.target.value };
                  setUserInfo(updatedUser);
                }}
              />{" "}
              male
            </label>

            <label htmlFor="female">
              <input
                type="radio"
                name="gender"
                value={"female"}
                id="female"
                onChange={(event) => {
                  let updatedUser = { ...userInfo, gender: event.target.value };
                  setUserInfo(updatedUser);
                }}
              />{" "}
              female
            </label>

            <label htmlFor="custom">
              <input
                type="radio"
                name="gender"
                value={"custom"}
                id="custom"
                onChange={(event) => {
                  let updatedUser = { ...userInfo, gender: event.target.value };
                  setUserInfo(updatedUser);
                }}
              />{" "}
              custom
            </label>
          </span>

          <button type="submit" className="signupBtn">
            Sign up
          </button>
        </form>
        <hr />
        <p>
          already have an account? <Link to={"/login"}>Login now</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
