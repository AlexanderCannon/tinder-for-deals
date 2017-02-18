import { createMarkupForStyles as toCSS } from 'react-dom/lib/CSSPropertyOperations.js'
import React from 'react'

// https://github.com/darkskyapp/string-hash/blob/master/index.js
const hash = str => {
  let hash = 5381
  let i = str.length

  while (i) {
    hash = (hash * 33) ^ str.charCodeAt(--i)
  }
  return hash >>> 0;
}

export default props => {
  if (!(props.style || props.styleActive || props.styleHover || props.styleActiveHover )) return null

  const style = toCSS(props.style)
  const className = `s-${Date.now()}${hash(style)}`

  const theStyle = [
    `.${className}{${style}}`,
    props.styleActive && `.${className}.active{${toCSS(props.styleActive)}}`,
    props.styleHover && `.${className}:hover{${toCSS(props.styleHover)}}`,
    props.styleActiveHover && `.${className}.active:hover{${toCSS(props.styleActiveHover)}}`,
  ].filter(Boolean).join('')

  return {
    className,
    style: <style>{theStyle}</style>,
  }
}

