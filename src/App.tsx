import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyles from "./components/shared-styles/styles.global";
import Header from "./components/Header";
import List from "./components/List";
import StoreNav from "./components/StoreNav";

export default function App(): JSX.Element {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <StoreNav />
        <Switch>
          <Route path="/" render={() => <List />} />
          <Route path="/cart" render={() => <List />} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}
