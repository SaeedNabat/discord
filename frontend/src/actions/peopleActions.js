import { openAlertMessage } from "./alertActions"
import * as api from '../servieces/api'

export const peopleActions = {
    SET_PEOPLE: "PEOPLE.SET_PEOPLE",
    SET_PENDING_INVITATION: "PEOPLE.SET_PENDING_INVITATION",
    SET_ONLINE_USERS: "PEOPLE.SET_ONLINE_USERS"
}

export const getActions = (dispatch) => {
    return {
        sendPeopleInvitation: (data, closeDialogHandler) => dispatch(sendPeopleInvitation(data,closeDialogHandler)),
        acceptPeopleInvitation: (data) => dispatch(acceptPeopleInvitation(data)),
        rejectPeopleInvitation: (data) => dispatch(rejectPeopleInvitation(data))
    }
}
export const setPendingPeopleInvitations = (pendingPeopleInvitations) => {
    console.log(`pending invitation is handling`)
    return {
        type: peopleActions.SET_PENDING_INVITATION,
        pendingPeopleInvitations
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

const acceptPeopleInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.acceptPeopleInvitation(data)
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else {
            dispatch(openAlertMessage("Invitation accepted!"));
        }
    }

}

const rejectPeopleInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.rejectPeopleInvitation(data)
        if(response.error){
            dispatch(openAlertMessage(response.exception?.response?.data))
        }else {
            dispatch(openAlertMessage("Invitation rejected!"));
        }
    }
}