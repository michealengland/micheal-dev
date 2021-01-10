import PropTypes from 'prop-types'
import React from 'react'
import styles from './Layout.module.css'

const Layout = ({children}) => {
  return <div id="layout" className={styles.layout}>{children}</div>
}

export default Layout

Layout.propTypes = {
  children: PropTypes.object,
}
