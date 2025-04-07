import {SWIGGY_IMAGE}from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cuisines, costForTwo, avgRating} = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    return (
      <div className="res-card">
        <img
          className="res-img"
          // src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}
          src={`${SWIGGY_IMAGE+resData.info.cloudinaryImageId}`}
          alt="res-img"
        />
        <div className="res-info">
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{costForTwo}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{deliveryTime} minutes</h4>
        </div>
      </div>
    );
  };
  export default RestaurantCard;