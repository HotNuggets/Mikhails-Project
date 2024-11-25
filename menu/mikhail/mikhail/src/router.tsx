import { createBrowserRouter } from "react-router-dom";
import Main from "./View/MainPage/Main";
import Menu from "./View/MenuPage/Menu"
import SidePanel from "./View/Components/SidePanel/SidePanel";
import FoodCard from "./View/Components/FoodCards/FoodCard";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
       
      },
      {
        path: "/menu",
        element: <Menu />,
        children:[
            {
                element:<div>Start</div>,
                index:true
            },
            {
                element:<SidePanel />,
                path:"side-panel"
            },
            {
                element:<FoodCard />,
                path:"food-card"
            }
    
        ]
      }

]);
