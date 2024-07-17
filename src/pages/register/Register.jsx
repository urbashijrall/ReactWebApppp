import "./register.scss";

export default function Register() {
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
            <input placeholder="Username" type="text" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <input placeholder="Re Enter your Password" type="password" className="loginInput" />
            <button className="loginButton">Sign up</button>
            <button className="loginRegisterButton">
              Log into your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
