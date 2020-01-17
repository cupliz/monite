import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useInput from './useInput'
import { addData, editData } from '../store/action'

var initialId = 10
export default function from({ type }) {
    const dataStore = useSelector(state => state.dataStore);
    const dispatch = useDispatch()
    const { id } = useParams();
    const [value, setValue] = useInput(id ? dataStore[id] : {})
    const { goBack } = useHistory()

    const update = (e) => {
        e.preventDefault()
        if (type === "edit") {
            dispatch(editData(value))
        } else {
            dispatch(addData({ ...value, id: initialId++ }))
        }
        goBack()
    }
    
    return (
        <div style={{ paddingTop: 80 }}>
            <form action="POST" onSubmit={update}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="test" className="form-control" name="name" value={value.name || ""} {...setValue} />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" name="phone" value={value.phone || ""} {...setValue} />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" name="address" value={value.address || ""} {...setValue} />
                </div>
                <div className="form-group">
                    <label>Latited</label>
                    <input type="text" className="form-control" name="lat" value={value.lat || ""} {...setValue} />
                </div>
                <div className="form-group">
                    <label>Longtited</label>
                    <input type="text" className="form-control" name="lng" value={value.lng || ""} {...setValue} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
