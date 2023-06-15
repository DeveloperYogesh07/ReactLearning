import { useEffect, useState } from "react";
import { resturantList } from "./config";
import Shimmer from "./shimmer";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{area}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwoString}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

function filterData(SearchInput, Restaurants) {
  const data = Restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(SearchInput.toLowerCase())
  );
  return data;
}

const Body = () => {
  const [AllRestaurants, setAllRestaurants] = useState([]);
  const [FilteredRestaurant,setFilterdRestaurant] = useState([]);
  const [SearchInput, setSerachInput] = useState();

  useEffect(() => {
    //  an api call
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilterdRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(!AllRestaurants) return null;

  if(FilteredRestaurant?.length === 0) return <h1>no data</h1>

  return AllRestaurants ?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="Search">
        <input
          type="text"
          placeholder="Serach Any Restaurant"
          value={SearchInput}
          onChange={(e) => {
            setSerachInput(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(SearchInput, AllRestaurants);
            setFilterdRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="Restaurant-list">
        {FilteredRestaurant.map((resturant) => {
          return <ResturantCard key={resturant.data.id} {...resturant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
