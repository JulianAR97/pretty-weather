import React from 'react'
import { makeStyles } from '@mui/styles'
import { deepPurple } from '@mui/material/colors'


const useStyles = makeStyles(theme => ({
  app: {
    backgroundImage: `linear-gradient(15deg, ${deepPurple[900]} 0%, ${deepPurple[200]} 100%)`,
    height: '100vh'
  }
}))

const App = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.app}>
      
    </div>
  )
}

export default App

