import React from 'react'
import PropTypes from 'prop-types'

export default function PostContent({children, className}) {
  return <section className={className}>{children}</section>
}

PostContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
