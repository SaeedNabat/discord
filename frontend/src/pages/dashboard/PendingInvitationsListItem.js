import { Tooltip, Typography } from '@mui/material';
import Avatar from '../../components/Avatar';
import React,{useState}from 'react'
import Box from '@mui/system/Box';
import InvitationDecisionButtons from './InvitationDecisionButtons';
const PendingInvitationsListItem = ({ id, username, mail, acceptInvitation = () => {}, rejectInvitation = () => {} }) => {
    const [buttonsDisabled, setButtonsDisabled] = useState(false)
    const handleAcceptInvitation = () => {
        acceptInvitation({ id });
        setButtonsDisabled(true);
    }
    const handleRejectInvitation = () => {
        rejectInvitation({ id });
        setButtonsDisabled(true);
    }
  return (
    <Tooltip title={mail} >
        <div style={{ width: '100%' }} >
            <Box sx={{
                width: '100%',
                height: '42px',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Avatar username={username} />
                <Typography sx={{
                    marginLeft: '7px',
                    fontWeight: 700,
                    color: '#8e9297',
                    flexGrow: 1
                }} variant="subtitle1">{username}</Typography>
                  <InvitationDecisionButtons
            disable={buttonsDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation} />
            </Box>
          
        </div>
    </Tooltip>
  )
}

export default PendingInvitationsListItem