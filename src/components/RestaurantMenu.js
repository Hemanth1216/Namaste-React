import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_RESTAURANT_MENU_URL } from "../utils/constants";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);
  const restaurantData = resInfo?.data?.cards[2]?.card?.card?.info;
  const menuData = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2];

  const getItemCards = (data) => {
    return (
      data?.card?.card?.itemCards ||
      data?.card?.card?.categories?.[0]?.itemCards ||
      []
    );
  };

  return restaurantData == null ? <Shimmer /> : (
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