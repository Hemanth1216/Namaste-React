import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="food-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4G7SValI18omeEupZZrkvEN7f-B9xcSs4OA&s"
          alt="Food App Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
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

const data = [
  {
    id: 1,
    name: "Parni's Kitchen",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/e9772866-688c-4f7d-8363-664515b8b158_464416.jpg",
    item: "Parni's Kitchen",
    rating: 4.4,
    time: 32
  },
  {
    id: 2,
    name: "Tandoori Treats",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/ea422e81-79ea-4ffa-b56b-bc0dbc34520d_657474.jpg",
    item: "Tandoori Chicken",
    rating: 4.2,
    time: 28
  },
  {
    id: 3,
    name: "Bombay Bites",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/7ebfac9e-877d-4737-882f-bd72d9d07650_487214.jpg",
    item: "Vada Pav",
    rating: 4.5,
    time: 25
  },
  {
    id: 4,
    name: "Spice Junction",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/12e3ef41-1079-47a2-a2b0-411cb9a072be_681600.jpg",
    item: "Biryani",
    rating: 4.6,
    time: 30
  },
  {
    id: 5,
    name: "Curry Leaves",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/16/5ff2a356-f154-452e-ac1e-53b5f49b141c_68325.jpg",
    item: "Paneer Butter Masala",
    rating: 4.3,
    time: 27
  },
  {
    id: 6,
    name: "Masala Magic",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/c6d98b17-67f6-4ad0-95a8-cf40554297fb_487212.JPG",
    item: "Masala Dosa",
    rating: 4.1,
    time: 22
  },
  {
    id: 7,
    name: "South Spice",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/4fe24ecc-ac3a-4ed6-a3ec-b0e5fc09d016_624472.jpg",
    item: "Idli & Vada",
    rating: 4.0,
    time: 20
  },
  {
    id: 8,
    name: "The Hungry Bowl",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/23/747a138e-4797-44f8-9a74-460bc46fb46a_991318.jpg",
    item: "Rice Bowl",
    rating: 4.2,
    time: 26
  },
  {
    id: 9,
    name: "Delhi Delight",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/19/b87f036c-565b-4fd2-beb3-f050a53657ae_68324.jpg",
    item: "Chole Bhature",
    rating: 4.5,
    time: 35
  },
  {
    id: 10,
    name: "Mumbai Express",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/26953074-a05f-4dba-b468-0b91d9f66ec4_1080322.JPG",
    item: "Pav Bhaji",
    rating: 4.3,
    time: 24
  },
  {
    id: 11,
    name: "Roti Rollers",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/5cd9018c-0e72-4cbd-8b53-4e0495282338_17105.JPG",
    item: "Kathi Roll",
    rating: 4.1,
    time: 18
  },
  {
    id: 12,
    name: "Garam Masala",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/193228fa-d5fe-4ba9-ab36-8f7d8c52e6b6_9296.jpg",
    item: "Chicken Curry",
    rating: 4.4,
    time: 33
  },
  {
    id: 13,
    name: "Samosa Street",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/3/9226049d-598f-4da2-8ebc-dc16c6d1b0a8_23734.jpg",
    item: "Samosa",
    rating: 4.0,
    time: 15
  },
  {
    id: 14,
    name: "Thali Time",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/193228fa-d5fe-4ba9-ab36-8f7d8c52e6b6_9296.jpg",
    item: "Veg Thali",
    rating: 4.3,
    time: 29
  },
  {
    id: 15,
    name: "Punjabi Rasoi",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/821f692b-57a9-4304-9c2b-cd847e59775a_487211.jpg",
    item: "Butter Chicken",
    rating: 4.6,
    time: 36
  }
];



const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <h3> Search </h3>
      </div>
      <div className="res-container">
        {
            data.map(restaurant => <RestaurantCard key={restaurant.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div className="app">
    <Header></Header>
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
