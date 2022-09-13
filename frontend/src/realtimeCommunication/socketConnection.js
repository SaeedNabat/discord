import io from 'socket.io-client'
import { setPendingPeopleInvitations , setPeople, setOnlineUsers } from '../actions/peopleActions';
import store from '../store/store'
import * as roomHandler from './roomHandler'
import { updateDirectChatHistoryIfActive } from '../utils/chat'

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

      
        store.dispatch(setPendingPeopleInvitations(pendingInvitations))
    })
    socket.on('people-list', (data) => {
        const { people } = data;
        store.dispatch(setPeople(people))

    })

    socket.on('online-users', (data) => {
        const {onlineUsers} = data;
        store.dispatch(setOnlineUsers(onlineUsers))
    })

    socket.on('direct-chat-history', data => {
        console.log(`received data = ${JSON.stringify(data)}`)
       updateDirectChatHistoryIfActive(data);
    })

    socket.on('room-create', (data)=>{
        roomHandler.newRoomCreated(data)
    })
}

export const sendDirectMessage = (data) => {
    console.log(data)
    socket.emit('direct-message', data)
}

export const getDirectChatHistory = (data) => {
    socket.emit('direct-chat-history', data)
};

export const createNewRoom = () => {
    socket.emit('room-create');
}

