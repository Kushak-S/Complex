import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'
import 'codemirror/mode/clike/clike'
import 'codemirror/addon/edit/closebrackets'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import { Box } from '@mui/system'

const Editor = (props) => {
    const{
        value,
        onChange
    } = props
    
    function handleChange(editor, data, value){
        onChange(value)
    }

  return (
    <Box className='editor-container'>
    <ControlledEditor
        className='controlled-editor'
        onBeforeChange={handleChange}
        value={value}
        options={{
            lineWrapping: true,
            lint: true,
            mode: 'text/x-csrc',
            lineNumbers: true,
            theme: 'dracula',
            autoCloseBrackets: true
        }}
    />
    </Box>
  )
}

export default Editor