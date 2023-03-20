import Navbar from "components/Navbar";
import Home from "pages/Home";
import { Route, Router, Switch } from "react-router-dom";
import history from "util/history";

const Routes = () => {
    return(
        <Router history={history}> 
            <Navbar/>

            <Switch>

                <Route path="/" exact>
                    <Home/>
                </Route>

            </Switch>
        </Router>
    );
}

export default Routes;