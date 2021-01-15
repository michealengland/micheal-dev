import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'

export default function PostHeader({content, title}) {
  return (
    <header>
      <Heading tag="h1">{title}</Heading>
      {content && <p>{content}</p>}
    </header>
  )
}

PostHeader.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}


