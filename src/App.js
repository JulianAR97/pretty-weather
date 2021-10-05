import React from 'react'
import { makeStyles } from '@mui/styles'
import { purple } from '@mui/material/colors'


const useStyles = makeStyles(theme => ({
  app: {
    backgroundImage: `linear-gradient(95deg, ${purple[500]} 0%, ${purple[200]} 100%)`
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

