import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'
import Avatar from '@content/assets/mle-12-05-21-512x512.jpeg'

export default function Hero({title, content, img}) {
  const backgroundImage = img && {backgroundImage: `url(${img})`}

  return (
    <section className={styles.hero} style={backgroundImage}>
      <div>
        <img
          alt="Micheal England"
          className={styles.avatar}
          height={512}
          src={Avatar}
          width={512}
        />
        {title && <h1 className={styles.title}>{ title }</h1>}
        {content && <p className={styles.content}>{ content }</p>}
      </div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
}
