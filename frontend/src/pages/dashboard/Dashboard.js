import React, { useEffect } from 'react'
import { styled } from '@mui/system'
import SideBar from './SideBar'
import AppBar from './AppBar'
import Messenger from './Messenger'
import PeopleSideBar from './PeopleSideBar'
import { logout } from '../../utils/auth'
import { connect } from 'react-redux'
import { getActions } from '../../actions/authActions'
const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex'
})
const Dashboard = ({ setUserDetails }) => {

  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(!user){
      logout()
    }else{
      setUserDetails(JSON.parse(user))
    }
  })
  return (
    <Wrapper>
      <SideBar />
      <PeopleSideBar />  
      <Messenger />
      <AppBar />
    </Wrapper>
  )
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}
export default connect(null, mapActionsToProps)(Dashboard)