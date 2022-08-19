import React, { useState } from 'react'
import PrimatyButton from '../../components/PrimatyButton';
import InviteDialog from './InviteDialog';

const additionalStyles = {
    marginTop: '10px',
    marginLeft: '5px',
    width: '80%',
    height: '30px',
    backgroundColor: '#3ba55d'
}
const InviteButton = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const handleOpenInviteDialog = () => {
        setIsDialogOpen(true)
    };
    const handleCloseInviteDialog = () => {
        setIsDialogOpen(false)
    }

  return (
    <>
        <PrimatyButton 
        addionalStyle={additionalStyles}
        label="Invite"
        onClick={handleOpenInviteDialog}
        />
        <InviteDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseInviteDialog}
        />
    </>
        
  )
}

export default InviteButton