import React, { useState } from "react";
import { login } from "../api";
import { storeToken, storeUsername } from "../auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>hello Login</h1>

      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            const data = await login(username, password);
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

export default Login;
