import ResContainer from "./res-container"
import useRestaurant from "../utils/useRestaurant"
import ShimmerUI from "./shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Body=()=>{
    const {listOfRes, filterRes, searchRes, setSearchRes, filterResList, TopRatedResList}=useRestaurant();
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
                    <h2>Check your internet connection</h2>
        )
    }

    return listOfRes.length === 0 ? <ShimmerUI /> :(
        <div className="body">
            <div className="search-bar">
                <input type="text" 
                    className="search-box" 
                    value={searchRes} 
                    onChange={(e)=>
                        {setSearchRes(e.target.value)}
                    }/>
                <button 
                    onClick={filterResList}
                >Search</button>
            </div>

            <div className="top-rated-res">
                <button className="top-rated-btn" 
                    onClick={TopRatedResList}>Top Rated restaurants</button>
            </div>

            <div className="res-container">
                    {
                        filterRes.map((restaurant)=>(
                            //urlParams-> site.com/restaurants/resID
                            <Link to={"/restaurants/"+restaurant.info.id}>    
                                <ResContainer key={restaurant.info.id} resData={restaurant}/>
                            </Link>
                        ))
                    }
            </div>
        </div>
    )
    
}

export default Body