import React from 'react'
import { Card, Typography } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => ({
  card: {
    backgroundImage: `linear-gradient(15deg, ${deepPurple[900]} 0%, ${deepPurple[200]} 100%)`
  },
  descriptors: {
    textTransform: 'uppercase'
  },
  temp: {

  }
}))

const WeatherCard = (props) => {
  const { city, description, temp } = props
  const classes = useStyles()
  
  return (
    
    <Card className={classes.card}>
      
      <Typography className={classes.descriptors} variant="h3">
        {city}
      </Typography>


      <div className={classes.weatherIcon}>

      </div>

      <Typography className={classes.temp} variant="h1">
        {temp}
      </Typography>

      <Typography className={classes.descriptors} variant="h3" >
        {description}
      </Typography>
    
    </Card>

  )
}

WeatherCard.defaultProps = {
  city: 'Add City',
  temp: '20',
  description: 'Sunny'
}

export default WeatherCard
