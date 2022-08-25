import io from 'socket.io-client'
import { setPendingPeopleInvitations } from '../actions/peopleActions';
import store from '../store/store'


let socket = null;
export const connectWithSocketServer = (user) => {
    const jwtToken = user.token;
    socket = io('http://localhost:5002', {
        auth: {
            token: jwtToken
        }
    })

    socket.on('connect', () => {
        console.log('succesfully connected with socket.io server')
        console.log(socket.id)
    })
    socket.on('people-invitations',(data) => {
        const { pendingInvitations } = data;

        console.log('people invitations event came')

        console.log(`pending invitation ${JSON.stringify(pendingInvitations)}`); 

        store.dispatch(setPendingPeopleInvitations(pendingInvitations))
    })
}