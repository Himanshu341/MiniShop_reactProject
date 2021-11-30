import LoginActionTypes from "./login.types"


const INITIAL_STATE = {
    hidden:true
}

const LoginReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case LoginActionTypes.TOGGLE_LOGIN_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
}

export default Loginreducer;