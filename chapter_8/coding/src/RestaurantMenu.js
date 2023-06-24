import { useEffect } from "react";
import { useState } from "react";
import { CDN_LINK } from "./config";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

const RestMenu = () => {
  console.log("RESTMENU componet called");
  const params = useParams();
  const { resId } = params;
  const [restaurant, setRestaurants] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    getRestaurantDetailsById(resId);
    
  }, []);

  //fect api to get the actual data.
  async function getRestaurantDetailsById(id) {
    console.log("getRestaurantInfo called", resId);
    
    //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.9749822&lng=73.314864&restaurantId=185362&submitAction=ENTER
    const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.9749822&lng=73.314864&restaurantId=${id}&submitAction=ENTER`;
    const data = await fetch(url);
    console.log("api is called and got the data");
    const json = await data.json();
    console.log(`got the data from api ${JSON.stringify(json.data)}`);
    
    setRestaurants(json?.data?.cards[0]?.card?.card?.info);
    console.log("restaurants", json?.data?.cards[0]?.card?.card?.info);
  }


  

 if(restaurant){
  return (
    <>
      <div>
      <div aria-hidden="true"><p className="RestaurantNameAddress_name__2IaTv">{restaurant.name}</p><p className="RestaurantNameAddress_cuisines__mBHr2">{restaurant?.cuisines?.join(',')}</p></div>
      </div>
    </>
  );
 } 
 else{
  <h1>no restaurant fo</h1>
 }
};

export default RestMenu;

// {/* <div>
//   <h1>Menu</h1>
//   <ul>
//     {Object?.values(restaurant?.menu?.items).map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// </div> */}
