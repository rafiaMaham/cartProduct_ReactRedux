import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  return (
    <div>
      <h3>Cart Page</h3>
      <div className="car tWrapper">
        {cartItems.map((item) => (
          <div className="cartCard" key={item.id}>
            <img src={item.image} alt="img" />
            <h4>{item.title}</h4>
            <h5>{item.price}</h5>
            <button className="btn" onClick={() => handleRemove(item.id)}>
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
