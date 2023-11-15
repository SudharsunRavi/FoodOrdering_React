import ResContainer from "./res-container"
import { useState } from "react"
import { useEffect } from "react"
import resList from "../utils/res-list"
import ShimmerUI from "./shimmer"

const Body=()=>{

    const [listOfRes, setListOfRes] = useState(resList); //list of restaurants
    const [filterRes, setFilterRes] = useState([]); //filter restaurants
    const [searchRes, setSearchRes] = useState(""); //search for restaurants

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await data.json();

        const restaurant_list = "restaurant_grid_listing";
        const restaurantCard = jsonData?.data?.cards?.find(
            (card) => card.card.card.id === restaurant_list
        );
        const restaurantData = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(restaurantData);
        setFilterRes(restaurantData);
    };

    const TopRatedResList = () => {
        let topRatedRes = listOfRes.filter((restaurant) => restaurant.info.avgRating > 4);
        setListOfRes(topRatedRes);
    };

    const filterResList = () =>{
        let filteredRes = listOfRes.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchRes.toLowerCase()));
        setFilterRes(filteredRes);
    };

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
                            <ResContainer key={restaurant.info.id} resData={restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
    
}

export default Body