import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <h5 className="profile-name">{user.name}</h5>
        <img className="profile-image" src={user.picture} alt={user.name} />
      </>
    )
  );
};

export default Profile;