import React from 'react'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { connect } from 'react-redux'
import { getActions } from '../actions/alertActions'
const AlertNotification = ({ showAlertMessage, closeAlertMessage, alertMessageContent}) => {
    console.log(typeof closeAlertMessage)
  return (
    <Snackbar
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center'}}
    open={showAlertMessage}
    onClose={closeAlertMessage}
    autoHideDuration={6000}
    >   
        <Alert severity='info'> 
        {alertMessageContent}  </Alert>
    </Snackbar>
  )
}


const mapStoreStateToProps = ({ alert }) => {
    return {
        ...alert,
    }
}
const mapActionsToProps = (dispatch)=> {
    return {
        ...getActions(dispatch)
    }
}
export default connect(mapStoreStateToProps, mapActionsToProps)(AlertNotification)