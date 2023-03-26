import React from 'react'
import { Box } from '@mui/material'

const Output = (props) => {
    const {value} = props
  return (
    <Box className='editor-container'>
        <textarea
            type='text'
            className='outputText'
            value={value}
            readOnly = {true}
        />
    </Box>
  )
}

export default Output