import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import styles from './Error404.module.css'

export default function Error404({content, title}) {
  return (
    <section className={styles.error404}>
      <title>{title}</title>
      <h1 className={styles.title}>{title}</h1>
      {!!content && <p className={styles.content}>{content}</p>}
      <Link to="/">Go home</Link>
    </section>
  )
}

Error404.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}
