import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/redux_cart/cartSlice";
import MenuItems from "./menu-items";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);

    const dispatch=useDispatch();
    const clearCartBtn=()=>{
        dispatch(clearCart())
    }

    return(
        <div>
            <h1>Cart</h1>
            <div>
                {cartItems.length===0 ? "Cart Empty! Add your favourite items!" : <MenuItems items={cartItems}/>}
            </div>
            <button onClick={clearCartBtn}>Clear</button>
        </div>
    )
}

export default Cart