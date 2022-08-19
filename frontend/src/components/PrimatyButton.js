import React from 'react'
import { Button } from '@mui/material'
const PrimatyButton = ({ label, addionalStyle, disabled, onClick}) => {
  return (
    <Button
        variant="contained"
        sx={{
            bgColor: "#5865F2",
            color: "white",
            textTransform: "none",
            fontSize: "16px",
            fontWeight: 500,
            width: "100%",
            height: "40px"
        }}
        style={addionalStyle ? addionalStyle : {}}
        disabled= {disabled}
        onClick= {onClick}
        >
        {label}        
    </Button>
    
  );
}

export default PrimatyButton