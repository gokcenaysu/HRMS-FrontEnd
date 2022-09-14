import React from "react";
import Button from "@mui/material/Button";

function Logout({login}){
  return (
    <div>
      <Button onClick={login} style={{ backgroundColor: 'pink', marginRight:"10px" }} variant="contained">
        Login
      </Button>
      <Button style={{ backgroundColor: 'pink' }} variant="contained">
        Register
      </Button>
    </div>
  );
  }
export default Logout;
