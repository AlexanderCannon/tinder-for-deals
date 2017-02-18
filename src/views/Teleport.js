import getStyle from './get-style.js'
import React, { Component, PropTypes } from 'react'
import { Link as Teleport } from 'react-router-dom'

const TRAILING_SLASH = /\/$/
const withTrailingSlash = path => (
  TRAILING_SLASH.test(path)? path : `${path}/`
)

export default class TeleportWrapper extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = getStyle(props)
  }

  render() {
    const { context, props, state } = this

    const to = `${withTrailingSlash(context.router.match.url)}${props.to}`
    const isActive = props.isActive || context.router.location.pathname === to

    return props.to ? (
      <Teleport
        className={isActive ? `${state.className} active` : state.className}
        to={to}
        onClick={props.onClick}
      >
        {state.style}
        {props.children}
      </Teleport>
    ) : (
      <div
        className={state.className}
      >
        {state.style}
        {props.children}
      </div>
    )
  }
}
TeleportWrapper.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  style: PropTypes.object,
  styleActive: PropTypes.object,
  styleActiveHover: PropTypes.object,
  styleHover: PropTypes.object,
}
