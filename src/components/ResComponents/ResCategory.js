import MenuItems from "./MenuItems"

const ResCategory=({data, showItems, setShowItems})=>{
    const accordionClicked=()=>{
        setShowItems();
    }

    return(
        <div className="w-6/12 mx-auto my-6 p-4 bg-gray-50 shadow-lg">
            <div className="flex justify-between text-xl cursor-pointer" onClick={accordionClicked}>
                <span className="font-semibold">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showItems && <MenuItems items={data.itemCards}/>}
        </div>
    )
}

export default ResCategory