import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../../components/FormField'
import PrimatyButton from '../../components/PrimatyButton'
import RedirectLink from '../../components/RedirectLink'
import { Tooltip } from '@mui/material'
const Form = ({mail, setMail, password, setPassword, handleLogin, isFormValid }) => {
    const navigate = useNavigate();
    const navigateToRegisterPage = () => {
        navigate('/register')
    }
    const getFormNotValidMessage= () => {
        return "Enter correct Email and password shoud contain between 6 and 20 character";
    }
    
    const getFormValidMessage= () => {
        return "Press to log in!";
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
            value={password}
            setValue={setPassword}
            label='Password'
            type='password'
            placeholder='Enter your password'
            />
        <Tooltip
        title={ !isFormValid ? getFormNotValidMessage() : getFormValidMessage() }>
            <div>
                <PrimatyButton label="Log in" addionalStyle={{marginTop: "30px"}}
                disabled={!isFormValid}
                onClick={handleLogin}
            />     
            </div>       
        </Tooltip>
        <RedirectLink text="Need an account"
        redirectText="Create an account"
        additionalStyles={{ marginTop: '5px'}}
        redirectHandler={navigateToRegisterPage}
        />
    </>
  )
}

export default Form