const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
   <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>
      <Link to="/profile" style={{ padding: "10px" }}>
        Profile
      </Link>
      <Link to="/about" style={{ padding: "10px" }}>
        About
      </Link>
      <Link to="/signup" style={{ padding: "10px" }}>
        Signup
      </Link>
      <Link to="/signin" style={{ padding: "10px" }}>
        Signin
      </Link>
    </nav>
  );
};
export default Navbar;