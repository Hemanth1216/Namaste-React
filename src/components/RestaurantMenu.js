import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurant(resId);
  const [showIndex, setShowIndex] = useState(null);
  const restaurantData = resInfo?.data?.cards[2]?.card?.card?.info;
  const itemCategories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return restaurantData == null ? (
    <Shimmer />
  ) : (
    <div className="restaurant-page-container text-center my-4">
      <div className="restaurant-details mb-4">
        <h2 className="font-black text-2xl">{restaurantData.name}</h2>
        <p>
          {restaurantData.cuisines.join(", ")} -{" "}
          {restaurantData.costForTwoMessage} -{" "}
          <strong>{restaurantData.avgRating + "★"} - </strong>
          {restaurantData.sla.deliveryTime + " mins"}
        </p>
      </div>

      <div className="restaurant-menu">
        <ul>
          {itemCategories.map((itemCategory, index) => {
            return (
              <RestaurantItemCategory
                key={itemCategory.card.card.categoryId}
                resItemData={itemCategory.card.card}
                isActive={index === showIndex}
                onShow={() => showIndex === index ? setShowIndex(null) : setShowIndex(index)}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
