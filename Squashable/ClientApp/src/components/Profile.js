import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const renderProfile = () => {
    if (isAuthenticated) {
      return (
        <div className="profile">
          <img className="profile-image" src={user.picture} alt="Profile" />
          <div className="profile-name">Welcome, {user.name}!</div>

          <LogoutButton />
        </div>
      );
    } else {
      return <LoginButton />;
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <>{renderProfile()}</>;
};

export default Profile;
