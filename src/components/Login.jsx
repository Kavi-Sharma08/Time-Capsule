import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { LOGIN_BACKGROUND } from "./utils/Constants";

const Login = () => {
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SignUpUser = async () => {
    const promise = account.createEmailPasswordSession(
      Email,
      Password
    );

    promise.then(
      function (response) {
        console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <div className="sm:w-[50%] sm:h-[60%] mx-auto relative top-[20%] w-[80%] h-[60%]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col justify-center items-center my-1">
          <img src={LOGIN_BACKGROUND} className="absolute -z-10" />

          <div className="m-2 w-[40%]">
            <p>Email</p>
            <input
              className="border-2 border-black p-2 w-full"
              type="email"
              id="Email"
              placeholder="Enter your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="m-2 w-[40%]">
            <p>Password</p>
            <input
              className="border-2 border-black p-2 w-full"
              type="password"
              id="Password"
              placeholder="Enter your Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="m-2 w-[40%]">
            <button
              type="submit"
              className="m-2 border-2 border-black w-full p-3 font-semibold hover:bg-white bg-red-700 transition-all transition-duration-300"
              onClick={SignUpUser}
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
