// import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript } from '@codemirror/lang-javascript'
import { EditorState } from '@codemirror/state'
import { EditorView } from '@codemirror/view'
import { basicSetup } from 'codemirror'

/* Themes */
import { oneDarkTheme } from "@codemirror/theme-one-dark"
import { materialLight } from '@ddietr/codemirror-themes/material-light'
import { materialDark } from '@ddietr/codemirror-themes/material-dark'
import { solarizedLight } from '@ddietr/codemirror-themes/solarized-light'
import { solarizedDark } from '@ddietr/codemirror-themes/solarized-dark'
import { dracula } from '@ddietr/codemirror-themes/dracula'
import { githubLight } from '@ddietr/codemirror-themes/github-light'
import { githubDark } from '@ddietr/codemirror-themes/github-dark'
import { aura } from '@ddietr/codemirror-themes/aura'
import { tokyoNight } from '@ddietr/codemirror-themes/tokyo-night'
import { tokyoNightStorm } from '@ddietr/codemirror-themes/tokyo-night-storm'
import { tokyoNightDay } from '@ddietr/codemirror-themes/tokyo-night-day'

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
      // oneDarkTheme
      // githubDark
      // materialDark
      // solarizedDark
      dracula
      // aura
      // tokyoNight
      // tokyoNightStorm
    ],
  }),
})
