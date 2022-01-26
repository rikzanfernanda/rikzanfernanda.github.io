import React from "react";
import MyNavbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const AppLayout = (props) => {
    return (
        <>
            {/*<MyNavbar/>*/}
            <div className="content">
                {props.content}
            </div>
            <Footer/>
        </>
    )
}

export default AppLayout;