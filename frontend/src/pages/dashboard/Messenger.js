import React from 'react'
import { styled } from '@mui/system'
import { connect } from 'react-redux'
import WelcomeMessage from './WelcomeMessage'
import MessengerContent from './MessengerContent'
const MainContainer = styled('div')({
    display: 'flex',
    flexGrow: 1,
    marginTop: '48px',
    backgroundColor: '#36393f'

})
const Messenger = ({ chosenChatDetails}) => {
  return (
    <MainContainer>
      {
        !chosenChatDetails ?( <WelcomeMessage />
        ):(
          <MessengerContent chosenChatDetails={chosenChatDetails}/>
        )
        
      }
    </MainContainer>
  )
}

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat
  }
}
export default connect(mapStoreStateToProps)(Messenger)