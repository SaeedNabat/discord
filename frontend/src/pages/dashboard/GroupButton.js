import React from 'react'
import GroupsIcon from '@mui/icons-material/Groups'
import Button from '@mui/material/Button'
const GroupButton = () => {
  return (
    <Button 
    style={{
        width: '48px',
        height: '48px',
        borderRadius: '16px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865F2'
    }}
    >
        <GroupsIcon /> 
    </Button>
  )
}

export default GroupButton