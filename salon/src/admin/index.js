import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../action'
import data from '../data'

function admin({ setUser }) {
    return (
        <div style={{ paddingTop: 80 }}>
            <div className="card">
                <div className="card-header bg-primary text-white">Salon</div>
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
                                            <td scope="col  btn-group btn-group-toggle">
                                                <label class="btn btn-dark active">
                                                <ion-icon name="trash"></ion-icon>
                                                </label>
                                            </td>
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

const mapStateToProps = state => {
    const { name, password } = state.user
    return { name, password }
}

const mapDispatchToProps = { setUser };

export default connect(mapStateToProps, mapDispatchToProps)(admin);
