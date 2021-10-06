import React from 'react'
import { makeStyles } from '@mui/styles'
import WeatherCard from 'components/WeatherCard'
import Sunny from '../weatherIcons/sunny.png'
import PartlyCloudy from '../weatherIcons/partly_cloudy.png'

const useStyles = makeStyles(theme => ({
  cardContainer: {
    display: 'flex'
  }
}))

const CardContainer = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.cardContainer}>
      <WeatherCard 
        city="New York"
        hi={6}
        lo={4}
        temp={20}
        description="partly cloudy"
        icon={PartlyCloudy}
      />
    </div>
  )
}

export default CardContainer
