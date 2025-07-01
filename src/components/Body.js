import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4492973&lng=78.3650231&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex m-5 gap-12">
        <div className="flex gap-2.5 ml-4">
          <input className="border border-solid border-black rounded-sm"
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <button className="bg-blue-300 rounded-sm cursor-pointer px-4 py-1"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredList(filteredData);
            }}
          >
            {" "}
            Search{" "}
          </button>
        </div>
        <div className="">
          <button className="bg-green-300 rounded-sm cursor-pointer px-4 py-1"
            onClick={() => {
              const filteredData = listOfRestaurants.filter((restaurant) => {
                return restaurant.info.avgRating >= 4.5;
              });
              setFilteredList(filteredData);
            }}
          >
            Top rated
          </button>
        </div>
      </div>
      <div className="flex flex-wrap m-5">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promopted ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};
