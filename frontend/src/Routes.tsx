import Navbar from "components/Navbar";
import Home from "pages/Home";
import Info from "pages/Info";
import Players from "pages/Players";
import Stadiums from "pages/Stadiums";
import Teams from "pages/Teams";
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

                <Route path="/teams" exact>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", padding:"20px"}}>
                        <Teams/>
                    </div>
                </Route>

                <Route path="/stadiums" exact>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Stadiums/>
                    </div>
                </Route>

                <Route path="/players" exact>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Players/>
                    </div>
                </Route>

            </Switch>
        </Router>
    );
}

export default Routes;