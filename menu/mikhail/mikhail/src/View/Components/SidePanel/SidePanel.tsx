import React from "react";
import "./SidePanel.scss";

interface Props {
    setCategory: (category: "breakfast" | "lunch" | "dinner") => void; 
  }
  
  const SidePanel: React.FC<Props> = ({ setCategory }) => {
    return (
      <div className="sidePanel">
        <button onClick={() => setCategory("breakfast")} className="button">
          Breakfast
        </button>
        <button onClick={() => setCategory("lunch")} className="button">
          Lunch
        </button>
        <button onClick={() => setCategory("dinner")} className="button">
          Dinner
        </button>
      </div>
    );
  };
  
  export default SidePanel;
