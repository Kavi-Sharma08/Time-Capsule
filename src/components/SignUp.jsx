import React, { useState } from "react";
import { Button } from "./ui/button";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";
import { LOGIN_BACKGROUND } from "./utils/Constants";
import { USER_PIC } from "./utils/Constants";
const SignUp = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const SignUpUser = async () => {
    const promise = account.create(uuid(), Email, Password);
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
    <div className="w-[50%] h-[60%] mx-auto my-7">
      <div className="flex items-center justify-center m-3">
        <img src={USER_PIC} className="w-[20%] h-[10%] my-3" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-col justify-center items-center my-1">
          <img src={LOGIN_BACKGROUND} className="absolute -z-10" />
          <div className="m-2 w-[40%]">
            <p>Name</p>
            <input
              className="border-2 border-black p-2 w-full"
              type="text"
              id="Name"
              placeholder="Enter Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              className="m-2 border-2 border-black w-full p-3 font-semibold hover:bg-white bg-purple-400 transition-all transition-duration-300"
              onClick={SignUpUser}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
