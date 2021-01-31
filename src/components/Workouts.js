import React, { useState } from "react"
import Activity from "./Activity"
import { useSelector } from "react-redux"
import AddActivity from "./AddActivity"

const Workouts = () => {
    const allActivities = useSelector((state) => state.activities.activities)
    const [add, setAdd] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <button onClick={() => setAdd(!add)} className="btn btn-success">Yeni Etkinlik Ekle</button>
                    {add && <AddActivity />}
                    <h1 className="mt-4">Etkinlik Listesi</h1>
                    {allActivities.map(activity => {
                        return <Activity id={activity.id} name={activity.name} duration={activity.duration} key={activity.id} />
                    })}
                    {
                        allActivities.length > 0 ? null : <div className="mt-4"><div className="alert alert-danger">Etkinlik Bulunamadı</div> </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Workouts;