import Navbar from "components/Navbar";
import Home from "pages/Home";
import Info from "pages/Info";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";

const Routes = () => {
    return(
        <Router history={history}> 
            <Navbar/>

            <Switch>

                <Route path="/" exact>
                    <Home/>
                    <div className="info-zone" style={{padding:"0px 20px"}}>
                        <Info/>
                    </div>
                </Route>

            </Switch>
        </Router>
    );
}

export default Routes;