import React, { useState } from "react"
import { useDispatch } from "react-redux"
import uuid from 'react-uuid'


const AddActivity = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        duration: ""
    });
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setError(false);
        e.persist();
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const addActivity = () => {
        setData({ name: "", duration: "" })
        if (data.name.length === 0 || data.duration.length === 0) {
            setError(true)
        } else {
            setError(false)
            dispatch({ type: "CREATE_ACTIVITY", payload: { id: uuid(), name: data.name, duration: data.duration } })
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mx-auto">
                        <div className="mb-3 mt-2">
                            <label className="form-label">Etkinlik Adı</label>
                            <input value={data.name} onChange={(e) => handleChange(e)} className="form-control" type="text" name={"name"} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Süre</label>
                            <input value={data.duration} onChange={(e) => handleChange(e)} className="form-control" type="text" name={"duration"} />
                        </div>
                        {
                            error ? <div className="alert alert-danger">Boş alan bırakmayınız </div> : null
                        }
                    </div>
                </div>
            </div>

            <button className="btn btn-primary" onClick={addActivity}>Kaydet</button>

        </div>
    )
}


export default AddActivity;