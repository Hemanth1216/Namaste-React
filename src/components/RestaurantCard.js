import { SWIGGY_IMAGE_BASE_URL } from "../utils/constants";


export const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className="res-card" style={styleCard}>
            <img className="food-image" src={SWIGGY_IMAGE_BASE_URL + resData.info.cloudinaryImageId} />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(', ')}</h4>
            <h4>{resData.info.avgRating + "★"}</h4>
            <h4>{resData.info.sla.deliveryTime + " mins"}</h4>
        </div>)
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};