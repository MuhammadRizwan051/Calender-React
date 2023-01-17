import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  let [monthLength, setMonthLength] = useState(0)
  let [totalDay, setTotalDay] = useState('')
  let [fullYear, setFullYear] = useState(2023)
  let [monthStart, setMonthStart] = useState()

  const getDays = () => {
    let day = new Date(fullYear, monthLength + 1, 0)
    console.log(day)
    setTotalDay(day.getDate())
    setMonthStart(day.getDay())
    setFullYear(day.getFullYear())

    let currentDate = new Date().getDate()
    let filterCurrentDate = all.filter((e, i) => {
      return e == currentDate
    })
    console.log(filterCurrentDate)
    // console.log(currentDate)
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
      <Box sx={{ height: '100vh', border: '1px solid', margin: 5 }}>

        <Box sx={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingY: 3 }}>
          <Box>
            <ion-icon name="arrow-back-outline" onClick={yearBackward}></ion-icon>
            <ion-icon name="arrow-back-outline" onClick={monthBackward}></ion-icon>
          </Box>
          <Typography sx={{ fontSize: 35 }}>{MONTH[monthLength] + " " + fullYear}</Typography>
          <Box>
            <ion-icon name="arrow-forward-outline" onClick={monthForward}></ion-icon>
            <ion-icon name="arrow-forward-outline" onClick={yearForward}></ion-icon>
          </Box>
        </Box>

        <Grid container>
          {DAYS.map((e, i) => (
            <Grid item sm={1.71} key={i}>
              <Typography sx={{ textAlign: 'center', border: '1px solid black', paddingY: 3, fontSize: 30, fontWeight: 'bold' }}>{e}</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{ width: '100%' }}>
          {all.map((e, i) => (
            <Grid item key={i} sm={1.71}>
              <Typography sx={{ textAlign: 'center', border: '1px solid black', paddingY: 5, fontSize: 30 }}>{e}</Typography>
            </Grid>
          ))}
        </Grid>

      </Box>
    </>
  )
}


export default App