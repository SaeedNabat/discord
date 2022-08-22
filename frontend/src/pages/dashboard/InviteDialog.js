import React, { useEffect, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import  Typography  from '@mui/material/Typography'
import { validateMail } from '../../utils/validators'
import FormField from '../../components/FormField'
import PrimatyButton from '../../components/PrimatyButton'
import { connect } from 'react-redux'
import { getActions } from '../../actions/peopleActions'
const InviteDialog = ({ isDialogOpen, closeDialogHandler, sendPeopleInvitation }) => {
    const [mail, setMail] = useState('');
    const [isFormValid, setIsFormValid] = useState('');
    const handleSendInvitation = () => {
        sendPeopleInvitation({
            targetMailAddress: mail
        },handleCloseDialog)
    }
    const handleCloseDialog = () => {
        closeDialogHandler();
        setMail('');
    }
    useEffect(()=>{
        setIsFormValid(validateMail(mail));
    }, [mail, setIsFormValid])
  return (
    <div>
        <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
            <DialogTitle>
                <Typography>Invite a Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>
                        Enter e-mail address of friend which you would like to invite
                    </Typography>
                    </DialogContentText>
                    <FormField label='Mail'
                    type='text'
                    value={mail}
                    setValue={setMail}
                    placeholder='Enter mail address' />
            </DialogContent>
            <DialogActions>
                <PrimatyButton
                onClick={handleSendInvitation}
                disabled={!isFormValid}
                label='Send'
                addionalStyle={{
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBotton:'10px' 
                }} />
            </DialogActions>
        </Dialog>
    </div>
  )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}
export default connect(null, mapActionsToProps)(InviteDialog)