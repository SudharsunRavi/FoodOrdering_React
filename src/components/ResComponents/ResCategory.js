import MenuItems from "./MenuItems"

const ResCategory=({data, showItems, setShowItems})=>{
    const accordionClicked=()=>{
        setShowItems();
    }

    return(
        <div className="w-full mx-auto my-6 p-4 bg-gray-50 shadow-lg font-poppins">
            <div className="flex justify-between text-xl cursor-pointer" onClick={accordionClicked}>
                <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <MenuItems items={data.itemCards}/>}
        </div>
    )
}

export default ResCategory