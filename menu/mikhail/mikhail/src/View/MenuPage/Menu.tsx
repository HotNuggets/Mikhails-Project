import React, { useState, useEffect } from "react";
import SidePanel from "../Components/SidePanel/SidePanel";
import FoodCard from "../Components/FoodCards/FoodCard";
import "./Menu.scss";

const Menu: React.FC = () => {
    const [category, setCategory] = useState<"breakfast" | "lunch" | "dinner">("breakfast");
    const [foodImage, setFoodImage] = useState<string>("");
  
    
    useEffect(() => {
      const fetchFoodImage = async () => {
        try {
          const response = await fetch("https://foodish-api.com/api/");
          const data = await response.json();
          setFoodImage(data.image); 
        } catch (error) {
          console.error("Error fetching food image:", error);
          setFoodImage(""); 
        }
      };
  
      fetchFoodImage();
    }, [category]); 
  
    return (
      <div className="menuContainer">
       
        <SidePanel setCategory={setCategory} />
  
    
        <div className="foodPanel">
          <FoodCard image={foodImage} />
        </div>
      </div>
    );
  };
  
  export default Menu;
