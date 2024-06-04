// import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'
import { oneDarkTheme } from "@codemirror/theme-one-dark"

import "/style.css";

const initialText = "function hello() {\n\talert('Hello world!');\n}";
const targetElement = document.querySelector('#editor')

new EditorView({
  parent: targetElement,
  state: EditorState.create({
    doc: initialText,
    extensions: [
      basicSetup,
      javascript(),
      oneDarkTheme
    ],
  }),
})
