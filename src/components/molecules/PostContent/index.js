import React from 'react'
import PropTypes from 'prop-types'
import styles from './PostContent.module.css'
import cn from 'classnames'

export default function PostContent({children, className}) {
  return (
    <section className={cn(styles.postContent, className)}>
      <div className={styles.inner}>{children}</div>
    </section>
  )
}

PostContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
