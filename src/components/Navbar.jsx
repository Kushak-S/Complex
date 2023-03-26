import React from 'react'
import { AppBar, Fab, Toolbar } from '@mui/material'
import { Terminal } from '@mui/icons-material';
import { Box } from '@mui/system'
import { lexcode } from './Lexcode';

const Navbar = ({value, onChange}) => {

  function handleClick(){
    onChange(lexcode(value));
  }

  return (
    <Box className='topBar-container'>
    <AppBar position='static' className='top-bar'>
        <Toolbar>
        <Fab variant='extended' size='small' onClick={handleClick}>
            <Terminal sx={{mr:1}} />
            Run
        </Fab>
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Navbar