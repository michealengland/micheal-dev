import PropTypes from 'prop-types'
import React from 'react'
import styles from './Layout.module.css'
import Header from '@components/organisms/Header'

const Layout = ({children}) => {
  return (
    <div id="layout" className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.object,
}
