import React from 'react'
import { styled } from '@mui/system'
import GroupButton from './GroupButton'
import CreateRoomButton from './CreateRoomButton'
const MainContainer = styled('div')({
    width: '72px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#202255'
})
const SideBar = () => {
  return (
    <MainContainer>
        <GroupButton />
        <CreateRoomButton/>
    </MainContainer>
  )
}

export default SideBar