import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../../firebase/authService";
import Loader from "../../components/common/Loader";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      await signupUser({
        username,
        email,
        password,
      });
      navigate("/");
    } catch (err) {
      setError("Failed to create account. Try again.");
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
        <form onSubmit={handleSignup}>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

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
            {loading ? <Loader size="sm" /> : "Sign Up"}
          </button>
        </form>

        {/* Terms */}
        <p className="text-muted text-center small mt-3">
          By signing up, you agree to our Terms & Privacy Policy.
        </p>

        {/* Divider */}
        <div className="auth-divider my-3">
          <span>OR</span>
        </div>

        {/* Login */}
        <div className="text-center">
          <span className="text-muted">Have an account? </span>
          <Link to="/login" className="auth-link">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
