import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/atoms/Button'
import styles from './Error404.module.css'

export default function Error404({content, title}) {
  return (
    <section className={styles.error404}>
      <title>{title}</title>
      <h1 className={styles.title}>{title}</h1>
      {!!content && <p className={styles.content}>{content}</p>}
      <Button to="/" label="Back to Micheal.dev" />
    </section>
  )
}

Error404.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}
