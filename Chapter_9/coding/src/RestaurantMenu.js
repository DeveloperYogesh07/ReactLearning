
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurant from "../../Utils/useRestaurant";

const RestMenu = () => {
  const params = useParams();
  const { resId } = params;
  // const [restaurants, setRestaurants] = useState([]);

  const restaurant = useRestaurant(resId);

  return (
    <>
      <div>
      <div aria-hidden="true"><p className="RestaurantNameAddress_name__2IaTv">{restaurant.name}</p><p className="RestaurantNameAddress_cuisines__mBHr2">{restaurant?.cuisines?.join(',')}</p></div>
      </div>
     
    </>
  );
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
