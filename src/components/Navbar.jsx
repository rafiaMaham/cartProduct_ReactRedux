import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span style={{ fontWeight: "bolder" }}>Redux State Management</span>
      <div>
        <Link to={"/"} className="navLink" style={{ fontWeight: "bolder" }}>
          Home
        </Link>
        <Link
          to={"/cart"}
          className="navLink"
          style={{ marginRight: "7px", fontWeight: "bolder" }}
        >
          Cart
        </Link>
        <span style={{ marginRight: "7px", fontWeight: "bolder" }}>
          {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
