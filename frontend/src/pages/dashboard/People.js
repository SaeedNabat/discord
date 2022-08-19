import React from 'react'
import { styled } from '@mui/system'
import Person from './Person'
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
const People = () => {
  return (
    <MainContainer>
        {
            DUMMY_FRIEND.map(f=> (
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

export default People