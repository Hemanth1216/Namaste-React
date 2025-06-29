import { SWIGGY_IMAGE_BASE_URL } from "../utils/constants";

export const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="w-[230] p-2.5 mx-1.5 my-2.5 h-[350] rounded-2xl bg-gray-100 hover:cursor-pointer hover:shadow-md hover:shadow-gray-500 hover:bg-gray-200">
      <img
        className="w-full h-[160] rounded-2xl"
        src={SWIGGY_IMAGE_BASE_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating + "★"}</h4>
      <h4>{resData.info.sla.deliveryTime + " mins"}</h4>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};
