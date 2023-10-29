import {RES_IMG} from '../utils/constants'

const ResContainer=(props)=>{

    const {resData}=props //obj destructing
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating}=resData.info //obj destructing

    return(
        <div className="res-card">
            <img className="res-img" src={RES_IMG + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwo}</p>
            <p>{avgRating}</p>
        </div>
    )
}

export default ResContainer
