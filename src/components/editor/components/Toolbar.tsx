import React from 'react'
import {
  Popper,
  PopperProps,
  ButtonGroup,
  IconButton,
  Input
} from '@mui/material'
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Link,
  Close
} from '@material-ui/icons'



export interface ToolbarProps extends Omit<PopperProps, 'children'> {}

export function Toolbar(props: ToolbarProps) {
  const [link, setLink] = React.useState(null)

  return (
    <Popper  {...props}>
      {link === null ? (
        /* Formatting controls */
        <ButtonGroup variant="text" color="primary">
          <IconButton size="small">
            <FormatBold fontSize="small" />
          </IconButton>
          <IconButton size="small">
            <FormatItalic fontSize="small" />
          </IconButton>
          <IconButton  size="small">
            <FormatUnderlined fontSize="small" />
          </IconButton>
          <IconButton
           
            size="small"
            
          >
            <Link fontSize="small" />
          </IconButton>
        </ButtonGroup>
      ) : (
        /* URL input field */
        <form onSubmit={x => x.preventDefault()}>
          <Input
          
            type="url"
            value={link}
           
            endAdornment={
              <Close
               
                fontSize="small"
                onClick={() => setLink(null)}
              />
            }
            placeholder="https://"
            disableUnderline
            fullWidth
            autoFocus
          />
        </form>
      )}
    </Popper>
  )
}
