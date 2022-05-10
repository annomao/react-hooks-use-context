import React, { useContext } from "react";
import { ThemeProvider } from "../context/theme";
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile() {

  const { user } = useContext(UserContext)
  console.log(user)
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <ThemeProvider>
       <Interests interests={user.interests}/>
      </ThemeProvider> 
      
    </div>
  );
}

export default Profile;
