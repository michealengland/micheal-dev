import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'
import createMarkup from '@utilities/createMarkup'

export default function MediaContent({content, img, imgAlt, title, titleTag}) {
  return (
    <section>
      {(title || content) &&
        <div>
          {title && <Heading tag={titleTag}>{title}</Heading>}
          {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
        </div>
      }
      {img &&
        <figure>
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
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

MediaContent.defaultProps = {
  imgAlt: '',
  titleTag: 'h2'
}
