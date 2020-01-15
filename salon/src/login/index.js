import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

export default function index() {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const history = useHistory()
    function login(e) {
        e.preventDefault()
        if (name === "admin" || "user" && password === "test") {
            localStorage.setItem("auth", name)
            if (name === "admin") {
                history.push("/")
            } else {
                history.push("/")
            }
        }
    }
    return (
        <div style={{ paddingTop: 80 }}>
            <form action="POST" onSubmit={login}>
                <div className="font-weight-bolder font-size">Welcome To Salon</div>
                <div className="form-group">
                    <label>Name</label>
                    <input type="name" className="form-control" onChange={e => setName(e.target.value)} name="name" value={name || ""} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} name="password" value={password || ""} />
                </div>
                <button type="submit" className="btn btn-primary mt-10">Login</button>
            </form>
            <div className="mt-20">
                <div>name = admin</div>
                <div>password = test</div>
            </div>
            <div>
                <div>name = user</div>
                <div>password = test</div>
            </div>
        </div>
    )
}
