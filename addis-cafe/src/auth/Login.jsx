import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function Login() {
  const [phone, setPhone] = useState("");
  const {login, loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? "/menu";

  async function handleSubmit(e) {
    e.preventDefault();
    await login(phone);
    navigate(from, {replace: true});
  }
  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          placeholder="Phone"
        />
        <button disabled={loading || !phone}>
          {loading? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
export default Login;