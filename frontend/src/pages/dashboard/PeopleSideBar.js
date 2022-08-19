import React from 'react'
import { styled } from '@mui/system'
import InviteButton from './InviteButton'
import PeopleTitle from './PeopleTitle'
import People from './People'
import PendingInvitationsList from './PendingInvitationsList'
const MainContainer = styled('div')({
    width: '224px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#2F3136'
})
const PeopleSideBar = () => {
  return (
    <MainContainer>
        <InviteButton />
        <PeopleTitle title="Private Messages" />
        <People />
        <PeopleTitle title="Invitations" />
        <PendingInvitationsList />
    </MainContainer>
  )
}

export default PeopleSideBar