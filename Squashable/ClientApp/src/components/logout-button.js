import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { logout } = useAuth0();
  return (
    <Button
      onClick={() => logout()}
      id="squashableLogoutBtn"
      variant="danger"
      className="btn-margin"
    >
      Logout
    </Button>
  );
};
