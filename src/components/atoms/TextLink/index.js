import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

export default function TextLink({children, to, activeClassName, partiallyActive, ...other}) {
  return (
    <Link
      // TODO FIX props on this.
      // activeClassName={activeClassName}
      // partiallyActive={partiallyActive}
      href={to}
      {...other}
    >
      {children}
    </Link>
  )
}

TextLink.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  partiallyActive: PropTypes.bool,
  to: PropTypes.string.isRequired,
}
