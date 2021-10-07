import React, { useEffect, useState } from 'react'
import { IconButton, useMediaQuery } from '@mui/material'
import { makeStyles } from '@mui/styles'
import WeatherCard from 'components/WeatherCard'
import { ArrowForward, ArrowBack } from '@mui/icons-material'
import Sunny from '../weatherIcons/sunny.png'
import PartlyCloudy from '../weatherIcons/partly_cloudy.png'
import { connect } from 'react-redux'
import { convertTemp } from 'helpers.js';

const useStyles = makeStyles(theme => ({
  arrow: {
    
  },
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    
  }
}))

const CardContainer = (props) => {
  
  // hooks
  const classes = useStyles()
  
  // variable declarations
  const { cities, tempUnit } = props

  // State
  const [page, setPage] = useState(0)
  const [pageCities, setPageCities] = useState(cities.slice(0, 1))
  const [buttonsDisabled, setButtonsDisabled] = useState({right: false, left: true})
  
  // Fix later, but basically listens for breakpoint and sets 1 result per page for xs and 3 for lg
  const citiesPerPage = [
    useMediaQuery(theme => theme.breakpoints.up('xs')), 
    useMediaQuery(theme => theme.breakpoints.up('md')), 
    useMediaQuery(theme => theme.breakpoints.up('lg'))
  ].lastIndexOf(true) + 1;
  
  
  // Use Effects

  // TODO: Make cities horizontally scrollable
  // when page, cities, or citiesPerPage changes, we set the new cities for that page
  useEffect(() => {
    let startIndex = page * citiesPerPage
    let endIndex = page * citiesPerPage + citiesPerPage

    setButtonsDisabled({left: startIndex === 0, right: endIndex >= cities.length})
    
    setPageCities(cities.slice(page * citiesPerPage, page * citiesPerPage + citiesPerPage))
  }, [page, cities, citiesPerPage])

  // When cities per page changes, reset the page to 0
  useEffect(() => {
    setPage(0)
  }, [citiesPerPage])
  
  
  // Functions
  const renderCards = (cities) => {
    return cities.map((c, index) => {
      
      let {hi, lo, temp, description, city} = c
      
      // temp defaults as celsius
      if (tempUnit === 'f')
        [hi, lo, temp] = [convertTemp(hi, "c"), convertTemp(lo, "c"), convertTemp(temp, "c")]
      
      return (
        <WeatherCard
          key={index}
          city={city}
          hi={hi}
          lo={lo}
          temp={temp}
          description={description}
          icon={description === 'sunny' ? Sunny : PartlyCloudy}
        />
      )})
  }

  return (
    <div className={classes.container}>
      
      <IconButton 
        className={classes.arrow} 
        size="small" 
        onClick={() => setPage(page - 1)} 
        disabled={buttonsDisabled.left}
      >
        <ArrowBack />
      </IconButton>
      
      <div className={classes.cardContainer}>
        {renderCards(pageCities)}
      </div>

      <IconButton 
        className={classes.arrow} 
        size="small" 
        onClick={() => setPage(page + 1)} 
        disabled={buttonsDisabled.right}
      >
        <ArrowForward />
      </IconButton>

    </div>
  )
}

const mapStateToProps = (state) => ({
  cities: [
    {
      city:"New York",
      hi:6,
      lo:4,
      temp: 20,
      description: "partly cloudy"
    },
    {
      city:"Boston",
      hi: 20,
      lo: 10,
      temp: 15,
      description: "sunny"
    },
    ...state.cities
  ],
  tempUnit: state.tempUnit
})

export default connect(mapStateToProps, null)(CardContainer)
