import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

export default function Link({ children, to, activeClassName, partiallyActive, ...other }) {
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        to={to}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  } else {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    )
  }
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  partiallyActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
}

Link.defaultProps = {
  displayType: false,
}
