import { AppBar, Toolbar, Typography } from '@mui/material'
import * as React from 'react'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Gentleman Programming React TEST
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
