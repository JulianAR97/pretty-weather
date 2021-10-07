import React from 'react'
import { makeStyles } from '@mui/styles'
import { deepPurple } from '@mui/material/colors'
import CardContainer from 'components/CardContainer'
import StyledSwitch from 'components/StyledSwitch'
import { connect } from 'react-redux'
import { setTempUnit } from 'actions/appActions'

const useStyles = makeStyles(theme => ({
  app: {
    backgroundImage: `linear-gradient(15deg, ${deepPurple[900]} 0%, ${deepPurple[200]} 100%)`,
    height: '100%',
    width: '100%',
    padding: '10px',
    display: 'grid',
    placeItems: 'center'
  },

  switch: {
    position: 'absolute',
    top: 10,
  }
}))

const App = (props) => {
  const classes = useStyles()
  
  const handleSwitch = (e) => {
    
    if (e.target.checked) 
      props.setTempUnit('f')
    else 
      props.setTempUnit('c')
    
  }
  return (
    <div className={classes.app}>
      
      <div className={classes.switch}>
        <StyledSwitch onChange={handleSwitch} checked={props.tempUnit === 'f'}/>      
      </div>

      <CardContainer />

    </div>
  )
}

const mapStateToProps = state => ({
  tempUnit: state.tempUnit
})


export default connect(mapStateToProps, {setTempUnit})(App)

