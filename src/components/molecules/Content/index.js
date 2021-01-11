import PropTypes from 'prop-types'
import React from 'react'
import createMarkup from '../../../utilities/createMarkup'

export default function Content({content, title}) {
  return (
    <section>
      {title && <h1>{title}</h1>}
      {content && <div dangerouslySetInnerHTML={ createMarkup(content) } />}
    </section>
  )
}

Content.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
}
