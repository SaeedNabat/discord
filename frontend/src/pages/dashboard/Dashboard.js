import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import SideBar from './SideBar'
import AppBar from './AppBar'
import Messenger from './Messenger'
import PeopleSideBar from './PeopleSideBar'
import { logout } from '../../utils/auth'
import { connect } from 'react-redux'
import { getActions } from '../../actions/authActions'
import { connectWithSocketServer } from '../../realtimeCommunication/socketConnection'
import Room from './Room'
const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})
const Dashboard = ({ setUserDetails, isUserInRoom }) => {

  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(!user){
      logout()
    }else{
      setUserDetails(JSON.parse(user))
      connectWithSocketServer(JSON.parse(user));

    }
  })
  return (
    <Wrapper>
      <SideBar />
      <PeopleSideBar />  
      <Messenger />
      <AppBar />
      {isUserInRoom && <Room />}
    </Wrapper>
  )
}
const mapStoreStateToProps = ({ room }) =>{
  return {
    ...room,
  }
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(Dashboard)