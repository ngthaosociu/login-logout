import "./login.css";

function Login() {
  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <h3>BALLISTICS<span>IQ</span></h3>
        </div>

        <div className="welcome">
          <p>GUIDE LIBRARY</p>
          <h1>Welcome</h1>
        </div>

        <div className="footer">
          © 2026 BALLISTICSIQ
        </div>
      </div>

      <div className="main">
        <div className="header">
          <span>Home</span>
          <span>/</span>
          <b>Login</b>
        </div>

        <div className="content">
          <div className="login-card">
            <h1>Sign in</h1>

            <div className="form-group">
              <label htmlFor="username">Username</label>

              <input
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="button" className="login-button">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;