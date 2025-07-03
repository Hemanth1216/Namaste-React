import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import Dish from "./Dish";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const clearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="cart text-center m-1 p-2">
      <h1 className="font-black text-2xl text-center"> Cart </h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <Dish key={item.id} dishData={item} source="cart"/>
            );
          })
        ) : (
          <h2 className="text-center font-bold text-2xl m-5">
            No items in the cart :(
          </h2>
        )}
      </ul>
      {cartItems.length > 0 && (
        <button
          className="border-solid m-1 py-1 px-3 rounded-md bg-blue-400 cursor-pointer"
          onClick={() => clearCart()}
        >
          {" "}
          clear cart
        </button>
      )}
    </div>
  );
};

export default Cart;
