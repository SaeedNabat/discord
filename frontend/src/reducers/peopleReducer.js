import { peopleActions } from "../actions/peopleActions";
const initState = {
    people: [],
    pendingInvitation: [],
    onlineUsers: []
}
const reducer = (state = initState, action) =>{
    switch(action.type){
        case peopleActions.SET_PENDING_INVITATION:
            return {
                ...state,
                pendingPeopleInvitation: action.pendingPeopleInvitation
            }
        case peopleActions.SET_PEOPLE:
            return {
                ...state,
                people: action.people
            }
        case peopleActions.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.onlineUsers
            }
        default:
            return state;
    }
}

export default reducer;