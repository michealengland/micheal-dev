import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => (
  <div id="layout">{children}</div>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.children,
}