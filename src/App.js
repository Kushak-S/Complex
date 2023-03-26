import React, { useState } from 'react'
import { Editor, Navbar, Output } from './components/index'
import { Box } from '@mui/system'

const App = () => {
  const [program, setProgram] = useState('//Write your code here');
  const [outputCode,setoutputCode] = useState('');

  const getOutput=(data)=>{
    setoutputCode(data)
  }
  return (
    <>
  <Navbar
    value={program}
    onChange={getOutput}
  />
  <Box display='flex'>
  <Editor
    value={program}
    onChange={setProgram}
  />
  <Output
    value={outputCode}
  />
  </Box>
  </>
  )
}
export default App