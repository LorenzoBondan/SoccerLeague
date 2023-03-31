import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Teams = () => {
    return(
        <Switch>
            <Route path="/admin/teams" exact>
                <List/>
            </Route>
            
            <Route path="/admin/teams/team/:teamId">
                <Form/>
            </Route>
        </Switch>
    );
}

export default Teams;