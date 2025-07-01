const Dish = ({ dishData }) => {
  const { name, price, defaultPrice } = dishData;
  return (
    <div className="dish">
        {name} - Rs. {price / 100 || defaultPrice / 100}
    </div>
  );
};

export default Dish;
