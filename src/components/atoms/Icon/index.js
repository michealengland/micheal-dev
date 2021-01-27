import PropTypes from 'prop-types'
import React from 'react'
import {ReactComponent as GithubLogo} from './svgs/github.svg'
import {ReactComponent as TwitterLogo} from './svgs/twitter.svg'
import {ReactComponent as LinkedinLogo} from './svgs/linkedin.svg'
const icons = {
  github: <GithubLogo />,
  linkedin: <LinkedinLogo />,
  twitter: <TwitterLogo />,
}
export default function Icon({ariaHidden, className, icon}) {
  return (
    <span className={className} aria-hidden={ariaHidden}>{ icons[icon] }</span>
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