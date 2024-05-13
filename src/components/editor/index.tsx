import React from 'react'
import { createEditor, Descendant, Node } from 'slate'
import {
  Editable,
  withReact,
  Slate,
  RenderElementProps,
  RenderLeafProps
} from 'slate-react'

import { DefaultElement } from './components/elements'
import { Toolbar } from './components/Toolbar'

function renderElement(props: RenderElementProps) {
  const { attributes, children } = props
  return <DefaultElement {...attributes}>{children}</DefaultElement>
}

function renderLeaf(props: RenderLeafProps) {
  const { attributes, children } = props
  return <span {...attributes}>{children}</span>
}

export interface EditorProps {
  value: Descendant[];
  onChange: (_value: Descendant[]) => void;
  placeholder?: string;
  autoFocus?: boolean;
  spellCheck?: boolean;
}

export function Editor(props: EditorProps) {
  const { value, onChange, ...other } = props
  const editor = React.useMemo(() => withReact(createEditor()), [])

  return (
    <Slate editor={editor} initialValue={value} onChange={onChange}>
      <Toolbar open={true} />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        {...other}
      />
    </Slate>
  )
}

export { Node }
