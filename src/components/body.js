import ResContainer from "./res-container"
import { useState } from "react"
import resList from "../utils/res-list"

const Body=()=>{

    const [listOfRes, setListOfRes] = useState(resList);

    const TopRatedResList = () => {
        let topRatedRes = listOfRes.filter((restaurant) => restaurant.info.avgRating > 4);
        setListOfRes(topRatedRes);
    };

    return(
        <div className="body">
            <div className="search-bar">
                Search
            </div>

            <div className="top-rated-res">
                <button className="top-rated-btn" 
                    onClick={TopRatedResList}>Top Rated restaurants</button>
            </div>

            <div className="res-container">
                    {
                        listOfRes.map((restaurant)=>(
                            <ResContainer key={restaurant.info.id} resData={restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
    
}

export default Body