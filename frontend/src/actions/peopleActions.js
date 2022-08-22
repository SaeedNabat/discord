import { openAlertMessage } from "./alertActions"
import * as api from '../servieces/api'

export const peopleActions = {
    SET_PEOPLE: "PEOPLE.SET_PEOPLE",
    SET_PENDING_INVITATION: "PEOPLE.SET_PENDING_INVITATION",
    SET_ONLINE_USERS: "PEOPLE.SET_ONLINE_USERS"
}

export const getActions = (dispatch) => {
    return {
        sendPeopleInvitation: (data, closeDialogHandler) => dispatch(sendPeopleInvitation(data,closeDialogHandler))
    }
}
const sendPeopleInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendPeopleInvitation(data);
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else {
            dispatch(openAlertMessage("invitation has been sent"));
            closeDialogHandler()
        }
    }
} 