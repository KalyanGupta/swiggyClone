/*
You're using shimmerRestaurants for two purposes:

1) To detect when the API call is still in progress (i.e., it's still []) and display 
the shimmer UI.

2) To store the original API data permanently after the initial fetch, 
so we can restore it later (e.g., when "Show All Restaurants" is clicked) 
without making another API call
*/

//This code is for normal search when we click on the Search button:
// import RestaurantCard from "./RestaurantCard";
// import { useState, useEffect } from "react";

// const Body = () => {

//   /*1st way of useState
//   const [restaurants, setRestaurants] = useState(resList);
//   */

//   /*2nd way of useState
//   const arr = useState(resList);
//   const [restaurants, setRestaurants] = arr;
//   */

//   /*3rd way of useState
//   const arr = useState(resList);
//   const restaurants = arr[0];
//   const setRestaurants = arr[1];
//   */

//   const [restaurants, setRestaurants] = useState([]);
//   const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
//   const [shimmerRestaurants, setShimmerRestaurants] = useState([]);
//   const [isTopRatedOn, setIsTopRatedOn] = useState(false);
//   const [searchText, setSearchText] = useState("");

//   useEffect(()=>{
//     console.log('useEffect called');
//     fetchRestaurants();
//   }, [])

//   const fetchRestaurants = async () =>{
//      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
//      const json = await data.json();
//      console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//      setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
//      setDisplayedRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//      setShimmerRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
//   }

//   const filterTopRestaurants = () => {
//     if (!isTopRatedOn) {
//       const filterResults = restaurants.filter(
//         (restaurant) => restaurant.info.avgRating > 4.2
//       );
//       setRestaurants(filterResults);
//       setDisplayedRestaurants(filterResults);
//       setIsTopRatedOn(true);
//       setSearchText("");
//     } else {
//       setRestaurants(shimmerRestaurants); //shimmerRestaurnts will cotain the actual API data.
//       setDisplayedRestaurants(shimmerRestaurants);
//       setIsTopRatedOn(false);
//       setSearchText("");
//     }
//   };

//   const searchRestaurants = () => {
//     const searchResults = restaurants.filter((restaurant) =>
//       restaurant.info.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
//     );
//     setDisplayedRestaurants(searchResults);
//   };

//   if(shimmerRestaurants.length===0){
//     return <h1>Loading...........</h1>
//   }

//   return (
//     <div>
//       <div className="search-filter">
//         <div className="filter">
//           <button className="filter-btn" onClick={filterTopRestaurants}>
//             {isTopRatedOn
//               ? "Show All Restaurants "
//               : "Show Top Rated Restaurants"}
//           </button>
//         </div>
//         <div className="search">
//           <input
//             className="search-bar"
//             type="text"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           />
//           <button className="search-btn" onClick={searchRestaurants}>
//             Search
//           </button>
//         </div>
//       </div>
//       <div className="res-container">
//         {displayedRestaurants.length >= 1 ? (
//           displayedRestaurants.map((restaurant) => (
//             <RestaurantCard
//               key={restaurant.info.id}
//               resData={restaurant}
//             ></RestaurantCard>
//           ))
//         ) : isTopRatedOn ? (
//           <h1>No results found you may find in all restaurants</h1>
//         ) : (
//           <h1>No results found</h1>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Body;

//This code is for debounced search functionality:
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer"
import { useState, useEffect } from "react";

const Body = () => {

  /*1st way of useState
  const [restaurants, setRestaurants] = useState(resList);
  */

  /*2nd way of useState
  const arr = useState(resList);
  const [restaurants, setRestaurants] = arr;
  */

  /*3rd way of useState
  const arr = useState(resList);
  const restaurants = arr[0];
  const setRestaurants = arr[1];
  */

  const [restaurants, setRestaurants] = useState([]);
  const [displayedRestaurants, setDisplayedRestaurants] = useState([]);
  const [shimmerRestaurants, setShimmerRestaurants] = useState([]);
  const [isTopRatedOn, setIsTopRatedOn] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    console.log('useEffect called');
    fetchRestaurants();
  }, [])

  useEffect(()=>{
      const timer = setTimeout(()=>{
          searchRestaurants();
      }, 300) //Only after the user stops typing for 300ms, the search function is called.

      return ()=>{
        clearTimeout(timer);
      }
  }, [searchText])

  const fetchRestaurants = async () =>{
     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
     const json = await data.json();
     console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
     setDisplayedRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
     setShimmerRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  }

  const filterTopRestaurants = () => {
    if (!isTopRatedOn) {
      const filterResults = restaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4.2
      );
      setRestaurants(filterResults);
      setDisplayedRestaurants(filterResults);
      setIsTopRatedOn(true);
      setSearchText("");
    } else {
      setRestaurants(shimmerRestaurants); //shimmerRestaurnts will cotain the actual API data.
      setDisplayedRestaurants(shimmerRestaurants);
      setIsTopRatedOn(false);
      setSearchText("");
    }
  };

  const searchRestaurants = () => {
    const searchResults = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().trim().includes(searchText.toLowerCase().trim())
    );
    setDisplayedRestaurants(searchResults);
  };

  if(shimmerRestaurants.length===0){
    // return <Shimmer></Shimmer>
    return <Shimmer></Shimmer>
    
  }

  return (
    <div>
      <div className="search-filter">
        <div className="filter">
          <button className="filter-btn" onClick={filterTopRestaurants}>
            {isTopRatedOn
              ? "Show All Restaurants "
              : "Show Top Rated Restaurants"}
          </button>
        </div>
        <div className="search">
          <input
            className="search-bar"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container">
        {displayedRestaurants.length >= 1 ? (
          displayedRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              resData={restaurant}
            ></RestaurantCard>
          ))
        ) : isTopRatedOn ? (
          <h1>No results found you may find in all restaurants</h1>
        ) : (
          <h1>No results found</h1>
        )}
      </div>
    </div>
  );
};
export default Body;

/*  In our second code:

-> Without this debounce, the search function would run for every single keystroke, 
which can be heavy and inefficient.

-> Debounce avoids unnecessary re-renders and makes your app more efficient.

Action	                      What happens

User types "p"	              Starts 300ms timer
User types "iz" quickly	      Clears previous timers, starts a new one (piz)
User stops typing	            After 300ms, searchRestaurants() runs


In simple terms:

Every time you type, the previous timer is canceled, and a new 300ms timer is started.
Only if you pause typing for 300ms, the search runs.
*/
