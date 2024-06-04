# POC for Code Mirror editor

# POC for Monaco Editor

As we found our choice didn't allow real time editing, we needed to start again to look for a package. We found 2 choices: [Monaco Editor](https://microsoft.github.io/monaco-editor/) (used by Visual Studio) and [CodeMirror](https://codemirror.net/).

PS. Highlightjs could do the work but it's via an unofficial package [highlighted-code](https://github.com/WebReflection/highlighted-code).

|                                       | Monaco                                              | CodeMirror                                              |
| ------------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| Editing and highlighting in real time | ✅                                                  | ✅                                                      |
| Language support (javascript)         | ✅                                                  | ✅                                                      |
| Extendible                            | ✅                                                  | ✅ [↗️](https://codemirror.net/docs/extensions/)        |
| Autocomplete, IntelliSense            | ✅advanced                                          | ✅basic                                                 |
| Themes and customization              | ✅                                                  | ⛔ few available                                        |
| License                               | ✅MIT                                               | ✅MIT                                                   |
| Documentation                         | ✅                                                  | ✅                                                      |
| Currently maintained                  | ✅                                                  | ✅                                                      |
| Community usage                       | 1.4M/week                                           | 1.3M/week                                               |
| Compatibility with Vite bundler       | ✅                                                  | ✅                                                      |
| Bundle size                           | ⛔3277 kb                                           | ✅ 474 kb                                               |
| PoC GitHub                            | [Monaco](https://github.com/FP22FD/poc-code-monaco) | [CodeMirror](https://github.com/FP22FD/poc-code-mirror) |
| PoC netlify                           | [Monaco](https://poc-monaco-editor.netlify.app/)    | [CodeMirror](https://poc-code-mirror.netlify.app/)      |

## Resources

Monaco Themes: <https://editor.bitwiser.in/> | <https://github.com/brijeshb42/monaco-themes>
CodeMirror Themes: <https://github.com/dennis84/codemirror-themes> | <https://github.com/codemirror/theme-one-dark> | <https://codemirror.net/examples/styling/>

CodeMirror setup: <https://davidmyers.dev/blog/how-to-build-a-code-editor-with-codemirror-6-and-typescript/introduction>
Monaco setup: <https://github.com/vitejs/vite/discussions/1791#discussioncomment-6088046> | <https://github.com/microsoft/monaco-editor/tree/main/samples/browser-esm-vite-react> (extra)

Monaco vs CodeMirror: <https://news.ycombinator.com/item?id=30673759>

## Note

This summary is based from my manual research and not automatically generated from an AI tool like chatGPT.
