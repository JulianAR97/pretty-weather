import React from 'react'
import { makeStyles } from '@mui/styles'
import { deepPurple } from '@mui/material/colors'
import CardContainer from 'components/CardContainer'
import StyledSwitch from 'components/StyledSwitch'

const useStyles = makeStyles(theme => ({
  app: {
    backgroundImage: `linear-gradient(15deg, ${deepPurple[900]} 0%, ${deepPurple[200]} 100%)`,
    height: '100%',
    padding: '10px',
    display: 'grid',
    placeItems: 'center'
  }
}))

const App = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.app}>
      <StyledSwitch />
      <CardContainer />
    </div>
  )
}

export default App

