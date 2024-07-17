import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          <h3 className="loginLogo">ReactJS Web App</h3>
          <span className="loginDescription">
            Connect with your friends and world around you on this amazing
            ReactJS Web App.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" type="email" className="loginInput"  />
            <input placeholder="Password" type="password" className="loginInput"  />
            <button className="loginButton">Log in</button>
            <button className="loginForgot">Forgot Password?</button>
            <button className="loginRegisterButton">Create a new account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
