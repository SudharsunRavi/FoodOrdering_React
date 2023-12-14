import ResContainer from "./ResComponents/ResContainer"
import useRestaurant from "../utils/custom_hooks/useRestaurant"
import ShimmerUI from "./ResComponents/ResShimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus"
import { OFFLINE_IMG } from "../utils/constants"

const Body=()=>{
    const {listOfRes, filterRes, searchRes, setSearchRes, filterResList, TopRatedResList}=useRestaurant();
    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <>
                <img src={OFFLINE_IMG} className="w-3/12 mx-auto" />
                <h2 className="w-3/12 mx-auto text-center text-2xl font-poppins font-semibold my-6">Check your internet connection</h2>
            </>     
        )
    }

    return listOfRes.length === 0 ? <ShimmerUI /> :(
        <div className="p-4 m-16">
            <div className="flex justify-between mb-10 w-10/12 mx-auto">
                <div>
                    <input type="text" 
                        className="border-2 border-gray-400 px-2 py-0.5 rounded-xl" 
                        value={searchRes} 
                        onChange={(e)=>
                            {setSearchRes(e.target.value)}
                        }
                    />
                    <button 
                        className="px-2 py-1 m-2 bg-orange-400 text-white rounded-xl hover:text-white"
                        onClick={filterResList}
                    >Search</button>
                </div>

                <div className="top-rated-res">
                    <button className="px-2 py-1 m-2 border bg-orange-400 rounded-xl text-white hover:text-orange-500 hover:border-orange-400 hover:bg-white" 
                        onClick={TopRatedResList}>Top Rated restaurants</button>
                </div>
            </div>
        
            <div className="flex flex-wrap justify-between w-10/12 mx-auto">
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