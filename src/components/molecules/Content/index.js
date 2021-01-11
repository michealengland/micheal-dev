import PropTypes from 'prop-types'
import React from 'react'
import createMarkup from '@utilities/createMarkup'
import Heading from '@components/atoms/Heading'

export default function Content({content, title, titleTag}) {
  return (
    <section>
      {title && <Heading tag={titleTag}>{title}</Heading>}
      {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
    </section>
  )
}

Content.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  titleTag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
}

Content.defaultProps = {
  titleTag: 'h2'
}
