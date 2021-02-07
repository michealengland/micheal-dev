import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'
import createMarkup from '@utilities/createMarkup'
import styles from './MediaContent.module.css'
import cn from 'classnames'

export default function MediaContent({content, img, imgAlt, layout, title, titleTag}) {
  return (
    <section className={cn(styles.mediaContent, styles[layout])}>
      <div className={styles.inner}>
        {(title || content) &&
          <div className={styles.content}>
            {title && <Heading className={styles.title} tag={titleTag}>{title}</Heading>}
            {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
          </div>
        }
        {img &&
          <figure className={styles.media}>
            <img src={img} alt={imgAlt} />
          </figure>
        }
      </div>
    </section>
  )
}

MediaContent.propTypes = {
  content: PropTypes.string,
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  layout: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

MediaContent.defaultProps = {
  imgAlt: '',
  layout: PropTypes.oneOf(['clipRight', 'clipLeft', 'octagonLeft', 'octagonRight']),
  titleTag: 'h2'
}
