import { React, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthBox from '../../components/AuthBox'
import Form from './Form';
import Heading from './Heading'
import { validateLoginForm } from '../../utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../actions/authActions';
const Login = ({ login }) => {
  const navigate = useNavigate();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(()=>{
    setIsFormValid(validateLoginForm({ mail, password}))
  },[mail, password, setIsFormValid])
  const handleLogin = ()=>{
    const userDetails = {
      mail,
      password
    }
    login( userDetails, navigate );
  }
  return (
    <AuthBox>
        <Heading />
        <Form isFormValid={isFormValid} handleLogin={handleLogin} mail={mail} setMail={setMail} password={password} setPassword={setPassword}/>
    </AuthBox> 
  )
}
const mapActionsToProps = (dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null, mapActionsToProps)(Login)