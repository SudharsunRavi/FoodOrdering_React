import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { useSelector } from "react-redux"
import Cart from "./Cart"

const Header=()=>{

    const [btnName, setBtnName]=useState("Login");
    const onlineStatus = useOnlineStatus();

    const cartItems=useSelector((store)=>store.cart.items)

    return (
        <div className="flex justify-between mx-16 my-4 p-4">

            <div className="logo-container">
                <img className="w-24" src={LOGO_URL}></img>
            </div>

            <div className="navBar">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4">Online Status: {onlineStatus? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/cart">Cart({cartItems.length})</Link></li>
                    <button className="login-btn" 
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