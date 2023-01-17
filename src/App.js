import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './App.css'


function App() {
  const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']

  let [monthLength, setMonthLength] = useState(0)
  let [totalDay, setTotalDay] = useState('')

  const getDays = () => {
    let day = new Date(2023, monthLength + 1, 0)
    setTotalDay(day.getDate())
  }

  useEffect(() => {
    getDays()
  }, [monthLength])


  let monthForward = () => {
    if (monthLength == 11) {
      setMonthLength(0)
    }
    else {
      setMonthLength(monthLength + 1)
    }
  }

  let monthBackward = () => {
    if (monthLength == 0) {
      setMonthLength(11)
    }
    else {
      setMonthLength(monthLength - 1)
    }
  }

  let all;
  {
    (() => {
      all = []
      for (let i = 1; i <= totalDay; i++) {
        all.push(i)
        console.log(all)
      }
    })()
  }


  return (
    <>
      <Box sx={{ height: '100vh', border: '1px solid', margin: 5 }}>

        <Box sx={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', paddingY: 3 }}>
          <ion-icon name="arrow-back-outline" onClick={monthBackward}></ion-icon>
          <Typography sx={{ fontSize: 35, fontWeight: 'bold', }}>{MONTH[monthLength]}</Typography>
          <ion-icon name="arrow-forward-outline" onClick={monthForward}></ion-icon>
        </Box>

        <Grid container>
          {DAYS.map((e, i) => (
            <Grid item xl={1.71} key={i}>
              <Typography sx={{ textAlign: 'center', border: '1px solid black', paddingY: 3, fontSize: 30, bgcolor: 'tan' }}>{e}</Typography>
            </Grid>
          ))}
        </Grid>

        <Grid container sx={{ width: '100%' }}>
          {all.map((e, i) => (
            <Grid item xl={1.71}>
              <Typography sx={{ textAlign: 'center', border: '1px solid black', paddingY: 5, fontSize: 30 }}>{e}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}


export default App