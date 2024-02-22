import { useEffect, useState } from "react";
import { add } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS, fetchProducts } from "../redux/ProductSlice";

const Home = () => {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    // const fetchProduct = async () => {
    //   // const response = await fetch("https://fakestoreapi.com/products");
    //   // const data = await response.json();
    //   // setProducts(data);
    // };
    // fetchProduct();

    dispatch(fetchProducts());
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUS.LOADING) {
    return <h2 style={{ fontWeight: "bolder" }}>LOADING</h2>;
  }

  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="img" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn" onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
