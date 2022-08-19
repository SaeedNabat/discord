import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../../components/FormField'
import PrimatyButton from '../../components/PrimatyButton'
import RedirectLink from '../../components/RedirectLink'
import { Tooltip } from '@mui/material'
const Form = ({mail, setMail, username, setUsername, password, setPassword, handleRegister, isFormValid }) => {
    const navigate = useNavigate();
    const navigateToLoginPage = ()=>{
        navigate('/login')
    }
    const getFormNotValidMessage=()=>{
        return "Username should contains between 6 and 20 characters.\nEnter correct Email.\n password shoud contain between 6 and 20 character";
    }
    
    const getFormValidMessage=()=>{
        return "Press to register!";
    }
    
  return (
    <>
        <FormField
            value={mail}
            setValue={setMail}
            label='Email'
            type='text'
            placeholder='Enter email address'
            />
        <FormField
            value={username}
            setValue={setUsername}
            label='Username'
            type='text'
            placeholder='Enter a username'
            />
        <FormField
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter your password'
            />
        <Tooltip
        title={ !isFormValid ? getFormNotValidMessage() : getFormValidMessage() }>
            <>
                <PrimatyButton label="Log in" addionalStyle={{marginTop: "30px"}}
                disabled={!isFormValid}
                onClick={handleRegister}
            />
            </>
            
        </Tooltip>
       
        <RedirectLink text="You already have a account"
        redirectText="Log in"
        additionalStyles={{ marginTop: '5px'}}
        redirectHandler={navigateToLoginPage}
        />
    </>
  )
}

export default Form