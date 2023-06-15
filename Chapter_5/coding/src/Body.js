import { useState } from "react";
import { resturantList } from "./config";

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

function updateData(SearchInput,Restaurants){
    const data = Restaurants.filter((restaurant)=>
        restaurant.data.name.toLowerCase().includes(SearchInput.toLowerCase())
  )
    return data

}


const Body = () => {
  const [Restaurants,setRestaurants] = useState(resturantList);
  const [SearchInput,setSerachInput] = useState();
   return (
    <>
    <div className="Search">
      <input
       type="text"
       placeholder="Serach Any Restaurant"
       value={SearchInput}
       onChange={(e)=>{ 
        setSerachInput(e.target.value);
       }}
      >
      </input>
        <button className="search-btn" 
        onClick={()=>{
             const data = updateData(SearchInput,Restaurants) 
             setRestaurants(data);
        }}
        >Search</button>
       </div>
      <div className="Restaurant-list">
        {Restaurants.map((resturant) => {
          return <ResturantCard key={resturant.data.id} {...resturant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
