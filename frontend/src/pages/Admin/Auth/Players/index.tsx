import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";

const Players = () => {
    return(
        <Switch>
            <Route path="/admin/players" exact>
                <List/>
            </Route>
            <Route path="/admin/players/:playerId">
                <Form/>
            </Route>
        </Switch>
    );
}

export default Players;