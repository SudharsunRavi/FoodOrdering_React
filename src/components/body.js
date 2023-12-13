import ResContainer from "./ResContainer"
import useRestaurant from "../utils/custom_hooks/useRestaurant"
import ShimmerUI from "./ResShimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus"

const Body=()=>{
    const {listOfRes, filterRes, searchRes, setSearchRes, filterResList, TopRatedResList}=useRestaurant();
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
                    <h2>Check your internet connection</h2>
        )
    }

    return listOfRes.length === 0 ? <ShimmerUI /> :(
        <div className="p-4 m-16">
            <div className="flex justify-between mb-10">
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
        
            <div className="flex flex-wrap justify-start">
                    {
                        filterRes.map((restaurant)=>(
                            //urlParams-> site.com/restaurants/resID
                            <Link to={"/restaurants/"+restaurant.info.id} key={restaurant.info.id}>    
                                {<ResContainer resData={restaurant}/>}
                            </Link>
                        ))
                    }
            </div>
        </div>
    )
    
}

export default Body