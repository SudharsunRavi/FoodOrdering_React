import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/custom_hooks/useOnlineStatus"
import { useSelector } from "react-redux"

const Header=()=>{

    const [btnName, setBtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems=useSelector((store)=>store.cart.items)

    return (
        <div className="flex justify-between mx-[120px] my-2 p-3 border-b-2 sticky top-0 bg-white">

            <div className="logo-container">
                <img className="w-[125px]" src={LOGO_URL}></img>
            </div>

            <div>
                <ul className="flex p-4 m-4 items-center font-poppins font-normal">
                    <li className="px-4">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4 hover:text-orange-500"><Link to="/">Home</Link></li>
                    <li className="px-4 hover:text-orange-500"><Link to="/contact">Contact</Link></li>
                    <li className="px-4 hover:text-orange-500"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <button className="border rounded-lg p-1 bg-orange-500 text-white hover:border-orange-500 hover:bg-white hover:text-orange-500" 
                    onClick={()=>{
                        btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>
                        {btnName}
                    </button>
                </ul>
            </div>
            
        </div>
    )
}

export default Header