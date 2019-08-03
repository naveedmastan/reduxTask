import React, { lazy, Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import PrivateRoute from './components/privateRoute'



function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={lazy(() => import("./components/login"))} />
          <Route exact path="/signUp" component={lazy(() => import("./components/login/signUp.js"))} />
          <PrivateRoute path="/viewProducts" component={lazy(() => import("./components/products"))} />
          <PrivateRoute path="/profile" component={lazy(() => import("./components/profile"))} />
          <PrivateRoute path="/addProduct" component={lazy(() => import("./components/products"))} />
          <PrivateRoute path="/editInfo" component={lazy(() => import("./components/login/editInfo.js"))} />
        </Switch>
      </Suspense>
    </div>
  );
}


export default App;
