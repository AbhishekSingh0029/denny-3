import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Header.css'
function Header() {
  return (
    <div className='contain'>
      <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="baseline"
  spacing={2}
>
      <Button variant="text">Job Portal</Button>
      <Button variant="contained" size="large">Employer Login</Button>
      <img className='goolge' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' ></img>
    </Stack>
    </div>
  )
}

export default Header
