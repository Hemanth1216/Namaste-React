import { RestaurantCard } from "./RestaurantCard";
import { data } from "../utils/mockData";
import { useState } from "react";

export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(data);
    return (
        <div className="body">
        <div className="search">
            <h3> Search </h3>
        </div>
        <div className="filter-btn">
            <button onClick={() => {
                const filteredData = listOfRestaurants.filter(restaurant => {
                    return restaurant.rating >= 4.5
                });
                console.log(filteredData);
                setListOfRestaurants(filteredData);
            }}>Top rated restaurants</button>
        </div>
        <div className="res-container">
            {
                listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
            }
        </div>
        </div>
    );
};