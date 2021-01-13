import React from 'react'
import Heading from '@components/atoms/Heading'
import PropTypes from 'prop-types'
import styles from './ContentCTA.module.css'
import createMarkup from '@utilities/createMarkup'

export default function ContentCTA({content, title, titleTag}) {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
        {content &&
          <>
            <hr />
            <div className={styles.content} dangerouslySetInnerHTML={createMarkup(content)} />
          </>
        }
      </div>
    </section>
  )
}

ContentCTA.propTypes = {
  content: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  url: PropTypes.string,
}

ContentCTA.defaultProps = {
  titleTag: 'h2'
}
