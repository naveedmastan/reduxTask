import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import PrivateRoute from './helpers/privateRoute'



const App=()=> {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={lazy(() => import("./pages/login"))} />
          <Route exact path="/signUp" component={lazy(() => import("./pages/signup"))} />
          <PrivateRoute path="/viewProducts" component={lazy(() => import("./pages/products"))} />
          <PrivateRoute path="/profile" component={lazy(() => import("./pages/profile"))} />
          {/* <PrivateRoute path="/addProduct" component={lazy(() => import("./pages/products"))} /> */}
          <PrivateRoute path="/editInfo" component={lazy(() => import("./pages/editInfo"))} />
          <PrivateRoute path="/allUsers" component={lazy(() => import("./pages/allUsers"))} />
        </Switch>
      </Suspense>
    </div>
  );
}


export default App;
