import {RES_IMG} from '../utils/constants'

const ResContainer=(props)=>{

    const {resData}=props //obj destructing
    const {cloudinaryImageId, name, cuisines, costForTwo, avgRating}=resData.info //obj destructing

    return(
        <div className="my-5 mr-9 w-[250px] h-[350px] bg-slate-50 rounded-xl p-5 hover:bg-gray-200">
            <img className="w-[275px] rounded-lg" src={RES_IMG + cloudinaryImageId}></img>
            <h3 className="font-bold text-lg py-2">{name}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwo}</p>
            <p>⭐ {avgRating}</p>
        </div>
    )
}

export default ResContainer
