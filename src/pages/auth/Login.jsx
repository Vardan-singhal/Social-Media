import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../firebase/authService";
import Loader from "../../components/common/Loader";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    try {
      setLoading(true);
      await loginUser(email, password);
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center">
      <div className="auth-card">
        {/* Logo */}
        <h2 className="auth-logo text-center mb-4">SocialGram</h2>

        {/* Form */}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="auth-error text-center mb-2">
              {error}
            </div>
          )}

          <button
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? <Loader size="sm" /> : "Log In"}
          </button>
        </form>

        {/* Divider */}
        <div className="auth-divider my-3">
          <span>OR</span>
        </div>

        {/* Signup */}
        <div className="text-center">
          <span className="text-muted">Don't have an account? </span>
          <Link to="/signup" className="auth-link">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
