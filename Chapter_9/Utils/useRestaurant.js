import { useEffect } from "react";
import { useState } from "react";

const useRestaurant = (resId) =>{
  console.log("RESTMENU componet called");
  const [restaurant, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    getRestaurantDetailsById(resId);
    
  }, []);

  //fect api to get the actual data.
  async function getRestaurantDetailsById(id) {
    console.log("getRestaurantInfo called", resId);
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.9749822&lng=73.314864&restaurantId=${id}&submitAction=ENTER`;
    const data = await fetch(url);
    console.log("api is called and got the data");
    const json = await data.json();
    console.log(`got the data from api ${JSON.stringify(json.data)}`);
    
    setRestaurants(json?.data?.cards[0]?.card?.card?.info);
    console.log("restaurants", json?.data?.cards[0]?.card?.card?.info);
  }

  return restaurant;

}

export default useRestaurant;