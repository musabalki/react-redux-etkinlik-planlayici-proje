import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

const Activity = (props) => {
    const dispatch = useDispatch();
    const [setId, setActivity] = useState(false);
    const [activityName,setActivityName]=useState();
    const [activityDuration,setActivityDuration]=useState();

    const deleteActivity = (id) => {

        dispatch({ type: "DELETE_ACTIVITY", payload: id })
    }
    useEffect(()=>{
        setActivityName(props.name)
        setActivityDuration(props.duration)
    },[])
    const editActivity = () => {
        setActivity(true);
    }
    const updateActivity = () =>{
        setActivity(false);
        const newActivity={id:props.id,name:activityName,duration:activityDuration}
        dispatch({ type: "UPDATE_ACTIVITY", payload: newActivity })
    }

    const changeActivity=(e)=>{
        setActivityName(e.target.value)
    }
    const changeDuration=(e)=>{
        setActivityDuration(e.target.value)
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", margin: 20, alignItems: "center" }}>
            {
                setId ? <div> <input type="text" onChange={(e)=>changeActivity(e)} value={activityName} /> <input type="text" onChange={(e)=>changeDuration(e)} value={activityDuration} />  <button className="btn btn-warning" onClick={()=>updateActivity()}>Güncelle</button> </div> : <span>Etkinlik: {props.name}, Süre: {props.duration} </span>
            }
            <button onClick={() => deleteActivity(props.id)} className="btn btn-danger ms-2" >Sil</button>
            <button onClick={() => editActivity(props.id)} className="btn btn-dark ms-2" >Düzenle</button>
        </div>
    )
}

export default Activity;