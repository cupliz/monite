import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function from() {
    const { id } = useParams();
    const { goBack } = useHistory()
    const dataStore = useSelector(state => state.dataStore);
    const data = dataStore[id]
    const title = [{ title: "Name", type: "name" }, { title: "Phone", type: "phone" }, { title: "Address", type: "address" }, { title: "Latited", type: "lat" }, { title: "Longtited", type: "lng" }]

    return (
        <div style={{ paddingTop: 80 }}>
            <form>
                {title.map((value, index) => {
                    return (
                        <div className="form-group row" key={index}>
                            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">{value.title}</label>
                            <div className="col-sm-10">
                                <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value={":   " + data[value.type]} />
                            </div>
                        </div>
                    )
                })}
            </form>
            <button type="btn" onClick={() => goBack()} className="btn btn-primary">Back</button>
        </div>
    )
}
