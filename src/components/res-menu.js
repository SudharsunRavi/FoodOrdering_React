import { useParams } from "react-router-dom";
import useResMenu  from "../utils/useResMenu";

const ResMenu=()=>{
    const {resID} = useParams();
    const resMenu = useResMenu(resID); //custom hook in utils folder

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