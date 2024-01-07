import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  // const [isLoggedin,setisLoggedin] = useState(false);

  const history = useHistory();

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // Here you can perform actions like sending login credentials to an API
    // For example:
    // const { username, password } = formData;
    // Your login API call or authentication logic goes here

    // After successful authentication, you can redirect the user
    history.push("/tasks");
    // setisLoggedin(true);
  };
  

  return (
    <div className="container loginCont">
      <h4>Login</h4>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s8">
            {/* {isLoggedin?():()} */}
            <input
              name="username"
              // placeholder="Username"
              id="username"
              type="text"
              className="validate"
              value={formData.username}
              onChange={onChange}
            />
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col s8">
            <input
              name="password"
              // placeholder="Password"
              id="password"
              type="password"
              className="validate"
              value={formData.password}
              onChange={onChange}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            className="btn waves-effect lime accent-2 black-text waves-dark"
            type="submit"
            name="action"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
