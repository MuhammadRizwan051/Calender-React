import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css'
import bgImage from './assets/bgImage.jfif'


function App() {
  const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  let [monthLength, setMonthLength] = useState(0)
  let [totalDay, setTotalDay] = useState('')
  let [fullYear, setFullYear] = useState(2023)
  let [monthStart, setMonthStart] = useState()

  const getDays = () => {
    let day = new Date(fullYear, monthLength + 1, 0)
    // console.log(day)
    setTotalDay(day.getDate())
    setFullYear(day.getFullYear())

    let currentDay = new Date(fullYear, monthLength, 1).getDay()
    setMonthStart(currentDay)
  }

  useEffect(() => {
    getDays()
  }, [monthLength, fullYear])


  let monthForward = () => {
    if (monthLength === 11) {
      setMonthLength(0)
    }
    else {
      setMonthLength(monthLength + 1)
    }
  }

  let monthBackward = () => {
    if (monthLength === 0) {
      setMonthLength(11)
    }
    else {
      setMonthLength(monthLength - 1)
    }
  }


  let yearForward = () => {
    setFullYear(fullYear + 1)
  }

  let yearBackward = () => {
    setFullYear(fullYear - 1)
  }

  let all;
  {
    (() => {
      all = []
      for (let i = 1; i <= totalDay; i++) {
        all.push(i)
        // console.log(all)
      }
    })()
  }


  return (
    <>
      <Box sx={{ height: '99vh', bgcolor: '#78ACCD', backgroundImage: `url("https://images2.alphacoders.com/993/993073.jpg")`, backgroundRepeat:'no-repeat', backgroundAttachment: 'fixed', backgroundSize: '100% 100%' }}>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '200px' }}>
          <Box className='shadow' sx={{ bgcolor: '#232425' }}>

            <Box sx={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingY: 3 }}>
              <ion-icon name="chevron-back" onClick={yearBackward}></ion-icon>
              <ion-icon name="arrow-back-outline" onClick={monthBackward}></ion-icon>
              <Typography sx={{ fontSize: 30, color: 'white' }}>{MONTH[monthLength] + " " + fullYear}</Typography>
              <ion-icon name="arrow-forward-outline" onClick={monthForward}></ion-icon>
              <ion-icon name="chevron-forward" onClick={yearForward}></ion-icon>
            </Box>

            <Grid container>
              {DAYS.map((e, i) => (
                <Grid item xs={1.714285} key={i} sx={{ bgcolor: 'white', color: '#232425' }}>
                  <Typography sx={{ textAlign: 'center', paddingY: 2, fontSize: 20, fontWeight: 'bold' }}>{e}</Typography>
                </Grid>
              ))}
              {Array.from({ length: monthStart }).map((_, index) => (
                <Grid item key={index} xs={1.714285} className='hover'>
                  <Typography sx={{ color: '#232425' }}>''</Typography>
                </Grid>
              ))}
              {all.map((e, i) => (
                <Grid item key={i} xs={1.714285} className='hover'>
                  <Typography className='number' sx={{ textAlign: 'center', paddingY: 2, marginX: 1, fontSize: 20, color: 'white' }}>{e}</Typography>
                </Grid>
              ))}
            </Grid>

          </Box>
        </Box>

      </Box>
    </>
  )
}


export default App