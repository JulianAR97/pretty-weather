import React from 'react'
import { Card, Typography } from '@mui/material'
import { deepPurple, purple } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'
import Sunny from '../weatherIcons/sunny.png'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundImage: `linear-gradient(0deg, ${purple[500]} 0%, ${deepPurple[900]} 60%)`,
    padding: '20px',
    width: 300,
    textAlign: 'center',
    borderRadius: '20px !important'
  },
  descriptors: {
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.7)'
  },
  temp: {
    color: 'white'
  },
  hiLo: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  weatherIcon: {
    width: '150px',
    height: 'auto',
    marginTop: '20px',
  }
}))

const WeatherCard = (props) => {
  const { city, description, hi, lo, temp, icon } = props
  const classes = useStyles()


  return (
    
    <Card className={classes.card}>
      
      {/* City Name */}
      <Typography className={classes.descriptors} variant="h6">
        {city}
      </Typography>

      {/* Weather Icon */}
      <div>
        <img src={icon} alt="Sunny" className={classes.weatherIcon}/>
      </div>
    
      {/* Temperature */}
      <Typography className={classes.temp} variant="h1">
        {temp}
      </Typography>

      {/* Description e.g. Partly Cloudy*/}
      <Typography className={classes.descriptors} variant="h5" >
        {description}
      </Typography>

      {/* Flex div where low temp is on the left and high temp is on the right */}
      <div className={classes.hiLo}>
        <Typography className={classes.temp} variant="h4">
          {lo}
        </Typography>
        <Typography className={classes.temp} variant="h4">
          {hi}        
        </Typography>
      </div>
    
    </Card>

  )
}

WeatherCard.defaultProps = {
  city: 'Add City',
  temp: '20',
  description: 'sunny',
  lo: 18,
  hi: 26,
  icon: Sunny
}

export default WeatherCard
