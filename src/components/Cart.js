import { useDispatch, useSelector } from "react-redux";
import { clearItems, addItem, removeItem } from "../utils/cartSlice";
import Dish from "./Dish";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log(cartItems);

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const clearCart = () => {
    dispatch(clearItems());
  };

  return (
    <div className="cart text-center m-1 p-2">
      <h1 className="font-black text-2xl text-center"> Cart </h1>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return (
              <div key={item.item.id} className="flex justify-center">
                <Dish dishData={item.item} source="cart" />
                <div className="flex gap-1.5 items-center">
                  <button
                    className="border rounded-full h-6 w-6 grid place-items-center cursor-pointer"
                    onClick={() => removeItemFromCart(item.item.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width={16}
                      height={16}
                    >
                      <path d="M5 11V13H19V11H5Z"></path>
                    </svg>
                  </button>
                  <span> {item.count} </span>
                  <button
                    className="border rounded-full h-6 w-6 grid place-items-center cursor-pointer"
                    onClick={() => addItemToCart(item.item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      width={16}
                      height={16}
                    >
                      <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" />
                    </svg>
                  </button>
                </div>
              </div>
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
