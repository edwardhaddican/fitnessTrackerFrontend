import { register } from "../api";

import { storeToken, storeUsername } from "../auth";

import React, { useState } from "react";

const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>hello register</h1>

      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const data = await register(username, password);
            storeToken(data.token);
            storeUsername(data.user.username);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <label>
          User Name
          <input
            name="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="text"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
