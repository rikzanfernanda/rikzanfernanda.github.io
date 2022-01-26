import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/home";
import AppLayout from "./Layouts/AppLayout";
import Web from "./Pages/web";
import GraphicDesign from "./Pages/graphic_design";
import Nopage from "./Pages/nopage";

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <AppLayout content={<Home/>}/>
                    </Route>
                    <Route path="/web" exact>
                        <AppLayout content={<Web/>}/>
                    </Route>
                    <Route path="/graphic-design" exact>
                        <AppLayout content={<GraphicDesign/>}/>
                    </Route>
                    <Route component={Nopage} exact/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes;