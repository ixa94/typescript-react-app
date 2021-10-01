import { AuthAction, AuthActionEnum, AuthState } from "./actionTypes";


const initialstate: AuthState={
  isAuth:true
}

export default function authReducer(state= initialstate,action: AuthAction): AuthState{
switch (action.type) {
  case  AuthActionEnum.SET_AUTH:
    return {...state,isAuth:action.payload}

  default:
    return state;
}
}
