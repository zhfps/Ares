import { RenderElementProps } from 'slate-react'
import { DefaultElement } from './elements'

export function renderElement(props: RenderElementProps) {
    const { attributes, children } = props
    return <DefaultElement {...attributes}>{children}</DefaultElement>
  }