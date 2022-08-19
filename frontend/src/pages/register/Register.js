import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthBox from '../../components/AuthBox'
import Form from './Form'
import { validateRegisterForm } from '../../utils/validators'
import { getActions } from '../../actions/authActions';
const Register = ({ register }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(()=>{
    setIsFormValid(validateRegisterForm({ mail, username, password}))
  },[mail, password, username, setIsFormValid])
  const handleRegister = ()=>{
   const userDetails = {
    mail,
    password,
    username
   }
   register(userDetails,navigate)
  }
  return (
    <AuthBox>
      <Typography variant="h5" sx={{ color: 'white' }}>
        Create an account
      </Typography>
      <Form 
      mail={mail}
      setMail={setMail}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      isFormValid={isFormValid}
      handleRegister={handleRegister}
      />
      
    </AuthBox>
  )
}
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Register)