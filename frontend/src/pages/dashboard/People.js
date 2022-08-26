import React from 'react'
import { styled } from '@mui/system'
import Person from './Person'
import { connect } from 'react-redux'
const DUMMY_FRIEND = [
    {
      id: 1,
      username: 'Mark',
      isOnline: true  
    },{
        id: 2,
        username: 'Anna',
        isOnline: false  
      },{
        id: 3,
        username: 'John',
        isOnline: false  
      }
]
const MainContainer = styled('div')({
    flexGrow: 1,
    width: '100%'
})
const checkOnlineUsers = (people = [], onlineUsers = []) => {
  people.forEach(p => {
    const isUserOnline = onlineUsers.find(user => user.id === p.id)
    p.isOnline = isUserOnline ? true:false;
  })
  console.log(`online users  are ${JSON.stringify(people)}`)
  return people;

}
const People = ({ people, onlineUsers }) => {
  console.log(`online users  are ${onlineUsers}`)
  return (
    <MainContainer>
        {
            checkOnlineUsers(people,onlineUsers).map(f=> (
                <Person
                username={f.username}
                id={f.id}
                key={f.id}
                isOnline={f.isOnline}
                />

            ))
        }
    </MainContainer>
  )
}

const mapStoreStateToProps = ({
  people
}) => {
  return {
    ...people
  }
}
export default connect(mapStoreStateToProps)(People)