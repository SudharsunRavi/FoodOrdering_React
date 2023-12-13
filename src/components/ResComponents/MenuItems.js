import { useDispatch } from "react-redux"
import { RES_IMG } from "../../utils/constants"
import { addItem } from "../../utils/redux_cart/cartSlice"

const MenuItems=({items})=>{

    const dispatch=useDispatch()
    
    const addItemCart=(item)=>{
        dispatch(addItem(item))
    }
    
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="m-2 p-2 border-b-2 border-gray-300">
                    <div className="flex justify-between">
                        <span className="text-lg">{item.card.info.name} <br /> ₹{item.card.info.price/100}</span>
                        <div>
                            <span><img src={RES_IMG + item.card.info.imageId} className="w-[100px] h-auto" /></span>
                            <button className="absolute right-[512px] text-sm border border-gray-500 cursor-pointer rounded-lg mt-1 p-1 text-white bg-black"
                                    onClick={()=>addItemCart(item)}
                            >ADD</button>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400 mt-6 ">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}

export default MenuItems