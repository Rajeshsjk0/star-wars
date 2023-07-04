import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const loginIds = [
    { Username: "Luke Skywalker", Password: "19BBY" },
    { Username: "Watto", Password: "unknown" },
  ];

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleSubmit = () => {
    let userNamePresent = false;
    loginIds.map((user) => {
      if (user.Username === username) {
        userNamePresent = true;
      }
    });
    if (userNamePresent) {
      loginIds.map((user) => {
        if (user.Username === username) {
          if (user.Password === password) {
            setIsLoggedIn(true);
            setLoginFailed(false);
            console.log("login sucess");
            navigate("/planet");
          } else {
            setIsLoggedIn(false);
            setLoginFailed(true);
          }
        }
      });
    } else {
      setIsLoggedIn(false);
      setLoginFailed(true);
    }
  };

  return (
    <div className="flex-container">
      <h1>Star Wars</h1>
      {loginFailed && (
        <div className="flex login-fialed">
          ambigious username more than one result
        </div>
      )}
      <form>
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{" "}
          </label>
          <input
            onChange={handleUsernameChange}
            id="username"
            type="text"
            value={username}
            required
          />
        </div>
        <br />
        <div className="flex">
          <label className="label-password" htmlFor="password">
            Password{" "}
          </label>
          <input
            onChange={handlePasswordChange}
            id="password"
            type="password"
            value={password}
            required
          />
        </div>
        <br />
      </form>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
