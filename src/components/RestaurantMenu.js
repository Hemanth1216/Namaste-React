import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_RESTAURANT_MENU_URL + resId);
    const jsonData = await response.json();
    console.log(jsonData.data.cards[2].card.card.info);
    console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    setRestaurantData(jsonData.data.cards[2].card.card.info);
    setMenuData(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
    );
  };

  const getItemCards = (data) => {
    return (
      data?.card?.card?.itemCards ||
      data?.card?.card?.categories?.[1]?.itemCards ||
      []
    );
  };

  if (restaurantData == null) {
    return <Shimmer />;
  }

  return (
    <div className="restaurant-page-container">
      <div className="restaurant-details">
        <h2>{restaurantData.name}</h2>
        <p>
          {restaurantData.cuisines.join(", ")} -{" "}
          {restaurantData.costForTwoMessage} -{" "}
          <strong>{restaurantData.avgRating + "★"} - </strong>
          {restaurantData.sla.deliveryTime + " mins"}
        </p>
      </div>

      <div className="restaurant-menu">
        <h3>Menu</h3>
        <ul>
          {getItemCards(menuData).map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs.{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
