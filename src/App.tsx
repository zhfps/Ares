import React from 'react'
//
import {
  MuiThemeProvider,
  Container,
  Card,
  CardContent
} from '@material-ui/core'
//
import { createTheme } from '@material-ui/core'
//
import { Editor } from './components/editor'
//
import { Descendant } from 'slate'
//
const theme = createTheme()


const initialValue: Descendant[] = [
  {
    type: 'paragraph',
    children: [{ text: '' }]
  }
]
/**
 * 
 * @returns 
 */
export default function App() {
  //
  const [value, setValue] = React.useState(initialValue)
  //
  const valueChange = (value: Descendant[]) => {
    console.log(value)
    setValue(value)
  }
  return (
    <MuiThemeProvider theme={theme}>
            <Editor
              value={value}
              onChange={valueChange}
              placeholder="Write text here..."
              autoFocus
              spellCheck
            />
    </MuiThemeProvider>
  )
}
