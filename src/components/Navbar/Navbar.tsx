import FavoriteIcon from '@mui/icons-material/Favorite'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import * as React from 'react'
import { CustomDialog } from '@/components'
import { FavoriteTable } from './FavoritesTable'
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog'

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true
  }

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Gentleman Programming React TEST
          </Typography>
          <Button
            color='inherit'
            variant='outlined'
            startIcon={<FavoriteIcon />}
            onClick={handleClick}
          >
            Favorites
          </Button>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
