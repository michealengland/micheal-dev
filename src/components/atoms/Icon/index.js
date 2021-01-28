import PropTypes from 'prop-types'
import React from 'react'
import Github from './svgs/github.svg'
import Twitter from './svgs/twitter.svg'
import Linkedin from './svgs/linkedin.svg'

export default function Icon({ariaHidden, className, icon}) {
  let element = null

  switch (icon) {
  case 'github':
    element = <Github />
    break

  case 'linkedin':
    element = <Linkedin />
    break

  case 'twitter':
    element = <Twitter />
    break

  default:
    break
  }

  return (
    <span className={className} aria-hidden={ariaHidden}>{ element }</span>
  )
}

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOf(['github', 'linkedin', 'twitter']),
}

Icon.defaultProps = {
  ariaHidden: true,
}