import React from 'react'
import { styled } from '@mui/system'
import { Typography } from '@mui/material';
const RedirectText = styled("span")({
    color: "#00AFFA",
    fontWeight: 500,
    cursor: "pointer"
});

const RedirectLink = ({text, redirectText, additionalStyles, redirectHandler}) => {
  return (
    <Typography
    sx={{ color: "#72767d" }}
    style={additionalStyles ? additionalStyles : {}}
    variant="subtitle2"
    >
        {text}
        <RedirectText onClick={redirectHandler} >{redirectText}</RedirectText>
    </Typography>
  )
  
}

export default RedirectLink