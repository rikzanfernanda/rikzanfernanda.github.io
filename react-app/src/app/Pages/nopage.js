import React from "react";
import error from "../../assets/img/404.gif";
import {Link} from "react-router-dom";

const Nopage = () => {
    return (
        <>
            <div className="text-center pt-5">
                <img src={error} alt="404"/> <br/>
                <Link to="/" className="btn btn-secondary">Back to Home</Link>
            </div>
        </>
    )
}

export default Nopage;