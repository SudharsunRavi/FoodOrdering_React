import { useState, useEffect } from "react";
import { RES_API } from "../constants";

const useRestaurant=()=>{
    const [listOfRes, setListOfRes] = useState(0); //list of restaurants
    const [filterRes, setFilterRes] = useState([]); //filter restaurants
    const [searchRes, setSearchRes] = useState(""); //search for restaurants

    const fetchData = async () => {
        const data=await fetch(RES_API);
        const jsonData=await data.json();

        const restaurant_list = "restaurant_grid_listing";
        const restaurantCard = jsonData?.data?.cards?.find(
            (card) => card.card.card.id === restaurant_list
        );

        const restaurantData = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRes(restaurantData);
        setFilterRes(restaurantData);
    };

    
    useEffect(()=>{
        fetchData();
    }, []);

    const TopRatedResList = () => {
        let topRatedRes = listOfRes.filter((restaurant) => restaurant.info.avgRating > 4);
        setFilterRes(topRatedRes);
    };

    const filterResList = () =>{
        let filteredRes = listOfRes.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchRes.toLowerCase()));
        setFilterRes(filteredRes);
    };

    return {listOfRes, filterRes, searchRes, setSearchRes, filterResList, TopRatedResList};
};

export default useRestaurant;