import './login.css';

function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Mehedisocial</h3>
          <span className="loginDesc">
            Connect with firends and the world around you on Mehedisocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton" type="button">Log In</button>
            <span className="loginForgot">Forgot Password</span>
            <button type="button" className="loginRegisterButton"> Create a New Account</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
