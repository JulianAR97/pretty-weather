import React from 'react'
import { Switch } from '@mui/material'
import { styled } from '@mui/styles'
import { deepPurple } from '@mui/material/colors'

const StyledSwitch = styled((props) => (
  <Switch 
    focusVisibleClassName=".Mui-focusVisible" 
    disableRipple {...props} 
  />
))(({ theme }) => ({
  width: 42,
  height: 40,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 5,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: deepPurple[500],
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default StyledSwitch
