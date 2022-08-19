import React from 'react'
import { styled } from '@mui/system'
import GroupButton from './GroupButton'
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
    </MainContainer>
  )
}

export default SideBar