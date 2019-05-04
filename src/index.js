import React from "react";
import ReactDOM from "react-dom";
import HomeNine from "./HomeNine";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomeNine}
          />
          <Route
            path={`${process.env.PUBLIC_URL}/home-nine`}
            component={HomeNine}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
