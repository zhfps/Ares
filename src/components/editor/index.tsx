import React from 'react'
//
import { createEditor, Descendant, Node } from 'slate'
//
import {
  Editable,
  withReact,
  Slate
} from 'slate-react'
//
import { renderElement } from './components/renderElement'

import renderLeaf from './components/renderLeaf'





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
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        {...other}
      />
    </Slate>
  )
}

export { Node }
