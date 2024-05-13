import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

export const DefaultElement = React.forwardRef(function DefaultElement(
  props: TypographyProps,
  ref: React.Ref<HTMLElement>
) {
  return <Typography ref={ref} {...props} />
})