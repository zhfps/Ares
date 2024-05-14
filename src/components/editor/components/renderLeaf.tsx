import { RenderLeafProps } from 'slate-react'

export default function renderLeaf(props: RenderLeafProps) {
    const { attributes, children } = props
    return <span {...attributes}>{children}</span>
  }