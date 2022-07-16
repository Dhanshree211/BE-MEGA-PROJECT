import { USER_NAME } from "../action/user"; 
import { USER_NUMBER } from "../action/user";
import { USER_EMAIL } from "../action/user";

const initialState = {
    userName:"",
    userNumber:"",
    userEmail:""
}

const userReducer  = (state = initialState, action) => {
    switch(action.type){
        case USER_NAME:
            return{...state, userName: action.userName}
        case USER_NUMBER:
            return{...state, userNumber: action.userNumber}
        case USER_EMAIL:
            return{...state, userEmail: action.userEmail}
        default:
            return state;
    }
}

export default userReducer;