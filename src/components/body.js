import ResContainer from "./res-container"
import resList from "../utils/res-list"

const Body=()=>{
    return(
        <div className="body">
            <div className="search-bar">
                Search
            </div>

            <div className="res-container">
                    {
                        resList.map((restaurant)=>(
                            <ResContainer key={restaurant.info.id} resData={restaurant}/>
                        ))
                    }
            </div>
        </div>
    )
    
}

export default Body