import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      id="squashableLoginBtn"
      variant="primary"
      className="btn-margin"
    >
      Login
    </Button>
  );
};