import { useParams } from "react-router-dom";
import useResMenu  from "../../utils/custom_hooks/useResMenu";
import ShimmerUI from "./ResShimmer"
import ResCategory from "./ResCategory";
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
        <div className="w-6/12 mx-auto mt-6 mb-12 p-4 font-poppins">
            <p className="font-semibold text-2xl float-right">⭐{avgRating}</p>
            <h3 className="font-bold text-2xl mb-5 ">{name}</h3>
            <p className="font-semibold text-lg">{cuisines}</p>
            <p className="font-semibold text-md">{costForTwoMessage}</p>
            <br/>
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