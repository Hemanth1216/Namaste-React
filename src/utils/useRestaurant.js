import { useEffect, useState } from "react"
import { SWIGGY_RESTAURANT_MENU_URL } from "./constants";

const useRestaurant = (resId) => {
    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_RESTAURANT_MENU_URL + resId);
        const json = await data.json();
        setRestaurantData(json);
    }
    return restaurantData;
}

export default useRestaurant;

