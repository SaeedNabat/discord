import { authActions } from '../actions/authActions'
const initState = {
    user:null
};

const reducer = (state = initState, action)=>{
    switch(action.type){
        case authActions.SET_USER:
            return {
                ...state,
                user: action.userDetails
            }
        default:
            return state;
    }
}

export default reducer;