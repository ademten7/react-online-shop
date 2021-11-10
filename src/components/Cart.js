import React, { useContext } from "react";
import { MyContext } from "../App";
import "./Cart.scss";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, setProducts, cart, setCart } = useContext(MyContext);
  let { quantity, setQuantity } = useContext(MyContext);

  const removeOne = (product) => {
    if (product.quantity === 1) {
      let updatedCart = cart.filter((el) => el.id !== product.id);
      setCart(updatedCart);
      quantity--;
      setQuantity(quantity);
    } else {
      product.quantity--;
      setCart([...cart]);
      quantity--;
      setQuantity(quantity);
    }
  };

  const removeAll = (product) => {
    quantity -= product.quantity;
    let updatedCart = cart.filter((el) => el.id !== product.id);
    setQuantity(quantity);
    setCart(updatedCart);
  };
  console.log(cart);

  return (
    <div className="cart">
      <h1 className="cart-header">
        {" "}
        <GiShoppingBag className="cart-icon" />
        Shopping Bag
      </h1>
      <div className="cart-products">
        {cart.map((item) => {
          return (
            <div className="cart-product">
              <Link className="product-class-name" to={`/products/${item.id}`}>
                <div className="image">
                  <img src={item.image} width="100" height="100" alt="" />
                </div>
                <div>
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-quantity">
                    Piece: <span className="pieces">{item.quantity}</span>
                  </p>
                </div>
              </Link>
              <div className="price">
                <h1>${item.price}</h1>
              </div>
              <div className="buttons">
                <button onClick={() => removeOne(item)} className="btn">
                  Remove One
                </button>
                <button onClick={() => removeAll(item)} className="btn">
                  Remove All
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
