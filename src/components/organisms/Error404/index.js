import React from 'react'
import PropTypes from 'prop-types'
import Button from '@components/atoms/Button'
import styles from './Error404.module.css'

export default function Error404({content, img, title}) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.error404} style={backgroundImage}>
      <title>{title}</title>
      <h1 className={styles.title}>{title}</h1>
      {!!content && <p className={styles.content}>{content}</p>}
      <Button to="/" label="Back to Micheal.dev" />
    </section>
  )
}

Error404.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string.isRequired
}
