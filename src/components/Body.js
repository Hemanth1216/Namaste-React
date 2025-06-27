import { RestaurantCard } from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  

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
    setFilteredList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        ></input>
        <button onClick={() => {
            const filteredData = listOfRestaurants.filter(res => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            })
            setFilteredList(filteredData);
        }}> Search </button>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            const filteredData = listOfRestaurants.filter((restaurant) => {
              return restaurant.info.avgRating >= 4.5;
            });
            setFilteredList(filteredData);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
