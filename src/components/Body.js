import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  //1st way of useState
  const [restaurants, setRestaurants] = useState(resList);
  
  /*2nd way of useState
  const arr = useState(resList);
  const [restaurants, setRestaurants] = arr;
  */

  /*3rd way of useState
  const arr = useState(resList);
  const restaurants = arr[0];
  const setRestaurants = arr[1];
  */
  
  const [topRated, setTopRated] = useState(false);
  const filterTopRestaurants = () => {
    if (!topRated) {
      const filteredRestaurants = restaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4.2
      );
      setRestaurants(filteredRestaurants);
      setTopRated(true);
    } else {
      setRestaurants(resList);
      setTopRated(false);
    }
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterTopRestaurants}>
          {topRated ? "Show all restaurants" : "Show Top rated restaurants"}
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[8]}></RestaurantCard> */}
        {restaurants.map((restaurant) => (
          <RestaurantCard
            resData={restaurant}
            key={restaurant.info.id}
          ></RestaurantCard>
        ))}
      </div>
    </div>
  );
};
export default Body;
