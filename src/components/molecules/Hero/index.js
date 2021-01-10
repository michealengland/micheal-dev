import PropTypes from 'prop-types'
import React from 'react'
import styles from './Hero.module.css'

export default function Hero({title, content, img}) {
  return (
    <section className={styles.hero}>
      <div>
        { title && <h1 className={styles.title}>{ title }</h1>}
        { content &&
          <>
            <hr />
            <p className={styles.content}>{ content }</p>
          </>
        }
      </div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.string,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
}
