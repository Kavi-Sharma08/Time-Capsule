import React, { useState } from "react";
import { Button } from "./ui/button";
import { LOGO } from "./utils/Constants";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { account } from "@/appwrite/appwriteConfig";
import { useDispatch } from "react-redux";
import { removeUser } from "./utils/UserSlice";
const Header = () => {
  const navigate = useNavigate();
  const dispatch =  useDispatch();
  
  
  const HandleLogOut = async () => {
    const result = await account.deleteSessions();
    console.log(result);
    dispatch(removeUser());
    navigate("/Home");
    alert("Logged Out")
  };
  return (
    <div className="w-full h-[15%]">
      <div className="w-full border-b-2 h-full">
        <div className="h-full flex justify-between items-center">
          <img src={LOGO} alt="Logo" className="h-full" />
          <div>
            <ul className="flex space-x-10 mx-10">
              <Link to={"/Home"}>
                <li>
                  <Button>Home</Button>
                </li>
              </Link>
              <Link to={"/About"}>
                <li>
                  <Button>About</Button>
                </li>
              </Link>
              <Link to={"/login"}>
                <li>
                  <Button>Login</Button>
                </li>
              </Link>
              <Link to={"/Signup"}>
                <li>
                  <Button>Sign-Up</Button>
                </li>
              </Link>
              <Button onClick={HandleLogOut}>Log Out</Button>
            </ul>
          </div>
        </div>
       </div> 

    </div>
  );
};

export default Header;
