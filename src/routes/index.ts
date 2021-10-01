import React from "react";
import Events from "../pages/Events";
import Login from "../pages/Login";


export interface Iroute{
  path:string;
  component:React.ComponentType;
  exact?:boolean;
}

export enum RouteNames{
  LOGIN = '/login',
  EVENT = '/'
}
export const publicRouter:Iroute[]=[
  {path:RouteNames.LOGIN,exact:true,component:Login}
]
export const privateRouter:Iroute[]=[
  {path:RouteNames.EVENT,exact:true,component:Events}
]
