import Dish from "./Dish";

const RestaurantItemCategory = ({ resItemData, isActive, onShow }) => {

  return (
    <div className="restaurant-item-category">
      <div
        className="w-6/12 flex justify-between mx-auto my-4 shadow-lg p-4 rounded-lg cursor-pointer bg-gray-200"
        onClick={onShow}
      >
        <span className="font-extrabold">
          {resItemData.title} ({resItemData.itemCards.length})
        </span>
        <span>{!isActive ? "🔽" : "⬆️"}</span>
      </div>
      {isActive ? (
        <div>
          <ul>
            {resItemData.itemCards.map((itemCard) => {
              return (
                <Dish key={itemCard.card.info.id} dishData={itemCard.card.info} />
              );
            })}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantItemCategory;
