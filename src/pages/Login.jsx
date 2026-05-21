// ============================================
// Login — Hub Starter Kit
// ============================================
// Password gate for the Hub.
// Password is set via VITE_HUB_PASSWORD env var.
// On success, sets hub_authed in localStorage so
// the user stays logged in across page refreshes.
// ============================================

function Login({ onLogin }) {
  function handleSubmit(e) {
    e.preventDefault();
    const password = e.target.password.value;
    onLogin(password);
  }

  return (
    <div className="login">
      <h1>hub</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          name="password"
          placeholder="password"
          autoFocus
        />
        <button type="submit">enter</button>
      </form>
    </div>
  );
}

export default Login;
