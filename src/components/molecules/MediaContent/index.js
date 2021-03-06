import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'
import createMarkup from '@utilities/createMarkup'
import styles from './MediaContent.module.css'
import cn from 'classnames'

export default function MediaContent({content, img, imgAlt, imgClipRight, title, titleTag}) {
  const imageClipClass = imgClipRight ? styles.clipRight : styles.clipLeft

  return (
    <section className={styles.mediaContent}>
      {(title || content) &&
        <div className={styles.content}>
          {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
          {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
        </div>
      }
      {img &&
        <figure className={cn(styles.media, imageClipClass)}>
          <img src={img} alt={imgAlt} />
        </figure>
      }
    </section>
  )
}

MediaContent.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  imgClipRight: PropTypes.bool,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

MediaContent.defaultProps = {
  imgAlt: '',
  imgClipRight: false,
  titleTag: 'h2'
}
