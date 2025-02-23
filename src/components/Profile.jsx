import React from "react";
import { useSelector } from "react-redux";
import { Button } from "./ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card";

const Profile = () => {
  const user = useSelector((store) => store.user.users);
  if (!user) return null;

  const { email, name } = user;
  return (
    <div>
      <div className="flex justify-end m-3">
        <HoverCard>
          <HoverCardTrigger>
            <Button>User Info</Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div>
              <p>Username : {name}</p>
              <p>Email : {email}</p>
            </div>
          </HoverCardContent>
          
        </HoverCard>
      </div>

      
    </div>
  );
};

export default Profile;
