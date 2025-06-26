

export const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className="res-card" style={styleCard}>
            <img className="food-image" src={resData.image} />
            <h3>{resData.name}</h3>
            <h4>{resData.item}</h4>
            <h4>{resData.rating + "★"}</h4>
            <h4>{resData.time + " mins"}</h4>
        </div>)
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};