import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const renderProfile = () => {
    if (isAuthenticated) {
      return (
        <>
          <img className="profile-image" src={user.picture} alt="Profile" />
          <div className="profile-name">Welcome, {user.name}!</div>
        </>
      );
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return <>{renderProfile()}</>;
};

export default Profile;
