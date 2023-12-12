import { useParams } from "react-router-dom";
import useResMenu  from "../utils/useResMenu";
import ShimmerUI from "./shimmer"
import ResCategory from "./res-category";
import { useState } from "react";

const ResMenu=()=>{
    const {resID} = useParams();
    const resMenu = useResMenu(resID); //custom hook in utils folder
    const [showItems, setShowItems] = useState();

    if (resMenu === null) return <ShimmerUI />;
    const { name, cuisines, costForTwoMessage, avgRating } = resMenu?.cards[0]?.card?.card?.info;

    if(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card === undefined) return <ShimmerUI />;
    const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    
    return(
        <div className="m-12">
            <h3 className="font-bold text-2xl mb-5 ">{name}</h3>
            <p className="font-semibold text-lg">{cuisines} - ⭐{avgRating}</p>
            <p className="font-semibold text-md">{costForTwoMessage}</p>
            <ul>
                {
                    categories.map((category, index)=>(
                        <ResCategory key={category?.card?.card?.title} 
                                    data={category?.card?.card} 
                                    showItems={index===showItems ? true : false} 
                                    setShowItems={()=>setShowItems(index)}
                        />
                    ))
                }
            </ul>
       </div>
    )
}

export default ResMenu