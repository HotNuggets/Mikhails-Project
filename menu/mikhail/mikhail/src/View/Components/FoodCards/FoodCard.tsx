import React from "react";
import  "./FoodCard.scss";

interface Props {
    image: string;
  }
  
  const FoodCard: React.FC<Props> = ({ image }) => {
    return (
      <div className="foodCard">
        {image ? (
          <img src={image} alt="Food" className="foodImage" />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default FoodCard;
  