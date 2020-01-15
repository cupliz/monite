import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link , useHistory} from 'react-router-dom'

function App() {
    // const counter = useSelector(state => state);
    // const dispatch = useDispatch();
let history = useHistory()
    return (
        <div className="App">

            <button
                // onClick={() =>
                //     dispatch({
                //         type: "Car"
                //     })
                // }
            >
                Car
    </button> &nbsp;&nbsp;&nbsp;
    {/* <h1>{counter.vehicle}</h1> */}
            <button
                onClick={() =>
                    history.push('/login')
                }
            >
                {/* <Link to="/login"> */}
                login
                {/* </Link> */}
      </button>
        </div>

    );
}

export default App;