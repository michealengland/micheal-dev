import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'

export default function Error404({content, title}) {
  return (
    <section>
      <title>{title}</title>
      <h1>{title}</h1>
      <p>{content}</p>
      <Link to="/">Go home</Link>
    </section>
  )
}

Error404.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string
}
