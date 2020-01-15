import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../action'
import Data from '../data'

function user({ setUser }) {
    const [data, setData] = useState([])
    useEffect(() => {
        // setData(Data)
        navigator.geolocation.getCurrentPosition(res => {
            const { latitude, longitude } = res.coords
            const dataFilter = Data.filter(value => (value.lat > latitude && value.lng > longitude || value.lat < latitude + 1 && value.lng < longitude + 1))
            setData(dataFilter)
        });
    })
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

export default connect(mapStateToProps, mapDispatchToProps)(user);
