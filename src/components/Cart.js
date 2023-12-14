import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux_cart/cartSlice";
import MenuItems from "./ResComponents/MenuItems";
import {EMPTY_CART_IMG} from "../utils/constants";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();
    const clearCartBtn=()=>{
        dispatch(clearCart())
    }

    return(
        <div className="w-6/12 mx-auto my-12 ">
            <h1 className="font-poppins font-bold text-3xl text-center">Cart</h1>

            <div>
                {cartItems.length===0 ? 
                    <>
                        <img src={EMPTY_CART_IMG} className="mx-auto h-[400px] my-8"/> 
                        <p className="text-xl text-center">Looks like your cart is empty! Add your favourite items.</p>
                        
                    </> 
                    : 
                    <>
                        <MenuItems items={cartItems}/> 
                        <button className="absolute left-[50%] border bg-orange-500 text-white p-2  cursor-pointer rounded-xl hover:bg-white hover:border-orange-500 hover:text-black " onClick={clearCartBtn}>Clear</button>
                    </> 
                }
                
            </div>

            
        </div>
    )
}

export default Cart