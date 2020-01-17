import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteData } from '../store/action'
// import data from '../../data'

function table({ type }) {
    const [data, setData] = useState([])
    const dataStore = useSelector(state => state.dataStore);
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        setData(dataStore)
    })

    const dispatchDeleteData = (index) => {
        setData([])
        dispatch(deleteData(index))
    }

    return (
        <div style={{ paddingTop: 80 }}>
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <div className="row d-flex justify-content-between">
                        <div className="mt-1">Salon</div>
                        {type === "admin" ?
                            <div className="btn btn-warning" onClick={() => history.push("/new")}>New +</div>
                            : null}
                    </div>
                </div>
                <div className="card-body border border-primary">
                    <table className="table table-primary">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Date</th>
                                <th scope="col">Address</th>
                                <th scope="col">Lat and Lng</th>
                                <th scope="col">
                                    <div>edit</div>
                                    <div>delete</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.phone}</td>
                                            <td>{value.date}</td>
                                            <td>{value.address}</td>
                                            <td>{value.lat}  and {value.lng}</td>
                                            {type === "admin" ?
                                                <td scope="col  btn-group btn-group-toggle row">
                                                    <label className="btn btn-danger" onClick={() => dispatchDeleteData(index)}>
                                                        delete
                                                </label>
                                                    <label className="btn btn-success" onClick={() => history.push("/edit/" + index)}>
                                                        edit
                                                </label>
                                                </td> :
                                                <td scope="col  btn-group btn-group-toggle row">
                                                    <label className="btn btn-danger" onClick={() => history.push("/from/" + index)}>
                                                        Show
                                             </label>
                                                </td>
                                            }
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default table
