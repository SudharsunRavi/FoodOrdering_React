import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useResMenu=(resID)=>{
    const [resMenu, setResMenu]=useState(null); 

    const fetchMenu = async () =>{
        const data=await fetch(MENU_API+resID)
        const jsonData=await data.json();
        setResMenu(jsonData.data);
    }

    useEffect(()=>{
        fetchMenu();
    },[])

    return resMenu;
}

export default useResMenu;