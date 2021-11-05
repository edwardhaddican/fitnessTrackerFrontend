import React from "react";
import { clearCurrentToken, clearCurrentUser } from "../auth";

const Header = (props) => {
  return (
    <div>
      <h1>hello world</h1>
      <button
        onClick={() => {
          clearCurrentToken();
          clearCurrentUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
