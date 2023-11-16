import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResMenu=()=>{
    const [resMenu, setResMenu]=useState(null);

    const {resID} = useParams();

    const fetchMenu=async()=>{
        const data=await fetch(MENU_API+resID)
        const jsonData=await data.json();
        setResMenu(jsonData.data);
    }

    useEffect(()=>{
       fetchMenu(); 
    },[])

    const {name, costForTwoMessage, avgRating, cuisines} = resMenu?.cards[0]?.card?.card?.info || {}; //res details destructing
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}; //menu items destructing

    return  (
        <div className="res-menu">
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{avgRating}</p>
            <p>{costForTwoMessage}</p>
            <ul>
                {
                    itemCards?.map((item)=>(
                        <li key={item.card.info.id}>
                            {item.card.info.name} --- Rs.{item.card.info.price / 100}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ResMenu