import React from 'react';
import { Switch,Redirect, Route } from 'react-router';
import { useTypedSelector } from '../ hooks/useTypedSelector';
import { privateRouter, publicRouter, RouteNames } from '../routes';

const AppRouter = () => {
 const {isAuth}= useTypedSelector(state=> state.auth)
  return (
    
    isAuth?
    <Switch>
{privateRouter.map(route=>
  <Route path={route.path}
  exact={route.exact}
  component={route.component}
  />
  )}
  <Redirect to={RouteNames.EVENT}/>
    </Switch>
      :
      <Switch>
      {publicRouter.map(route=>
  <Route path={route.path}
  exact={route.exact}
  component={route.component}
  />
  )}
  <Redirect to={RouteNames.LOGIN}/>
      </Switch>
    
  );
};

export default AppRouter;
