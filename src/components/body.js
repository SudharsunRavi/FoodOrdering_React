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
        <div className="p-4 m-4">
            <div className="flex justify-between">
                <div>
                    <input type="text" 
                        className="border-2 border-gray-400 px-2 py-0.5 rounded-xl" 
                        value={searchRes} 
                        onChange={(e)=>
                            {setSearchRes(e.target.value)}
                        }
                    />
                    <button 
                        className="px-2 py-1 m-2 bg-orange-400 rounded-xl"
                        onClick={filterResList}
                    >Search</button>
                </div>

                <div className="top-rated-res">
                    <button className="px-2 py-1 m-2 bg-orange-400 rounded-xl" 
                        onClick={TopRatedResList}>Top Rated restaurants</button>
                </div>
            </div>
        
            <div className="flex flex-wrap justify-between">
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