import { useEffect } from "react";
import { useState } from "react";
import { CDN_LINK } from "./config";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestMenu = () => {
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
    console.log("function is called");
  }, []);

  async function getRestaurantInfo() {
    const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.9749822&lng=73.314864&menuId=${resId}`;
    const data = await fetch(url);
    console.log("api is called");
    const json = await data.json();
    setRestaurant(json.data.cards[3].data.data);
    console.log(json.data.cards);
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
        {console.log("before")}
        {console.log(restaurant)};
        {console.log("after")}
        <h1>RestaurantID:{params.resId}</h1>
        <h1>{restaurant?.name}</h1>
        <h1>{restaurant?.area}</h1>
        <h1>{restaurant?.city}</h1>
      </div>

      <div>
        <h1>Menu</h1>
        <ul>
          {Object?.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestMenu;
