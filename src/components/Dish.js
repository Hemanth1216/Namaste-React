import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const Dish = ({ dishData }) => {
  const { name, price, defaultPrice } = dishData;
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem(dishData));
  }
  return (
    <div className="dish m-3">
        {name} - Rs. {price / 100 || defaultPrice / 100}
        <button className="border border-solids cursor-pointer px-2 ml-5 bg-black rounded-md text-white"
        onClick={() => addToCart()}> + </button>
    </div>
  );
};

export default Dish;
