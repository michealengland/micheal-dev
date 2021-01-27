import PropTypes from 'prop-types'
import React from 'react'

const icons = {
  twitter: 'M21.4307 4.35512C20.8496 4.72161 19.5153 5.25418 18.8573 5.25418V5.25528C18.106 4.48246 17.0482 4 15.8751 4C13.5967 4 11.7491 5.81913 11.7491 8.06165C11.7491 8.37322 11.7858 8.67714 11.8536 8.96859H11.8529C8.76222 8.88872 5.382 7.36345 3.34711 4.7529C2.096 6.88514 3.17867 9.25653 4.59845 10.1206C4.11245 10.1567 3.21778 10.0654 2.79667 9.66088C2.76844 11.0761 3.45956 12.9512 5.97956 13.6315C5.49422 13.8886 4.63511 13.8149 4.26156 13.7602C4.39267 14.9548 6.09178 16.5167 7.94978 16.5167C7.28756 17.2709 4.796 18.6388 2 18.2036C3.89889 19.3412 6.112 20 8.45444 20C15.1111 20 20.2807 14.6881 20.0024 8.13517C20.0013 8.12795 20.0013 8.12073 20.0007 8.11285C20.0013 8.096 20.0024 8.07915 20.0024 8.06165C20.0024 8.0413 20.0007 8.02204 20 8.00235C20.606 7.59428 21.4191 6.87245 22 5.92241C21.6631 6.10511 20.6524 6.47095 19.712 6.56175C20.3156 6.24098 21.2098 5.19051 21.4307 4.35512Z',
}

export default function Icon({ariaHidden, className, icon, title}) {
  return (
    <svg
      fill="currentColor"
      width={24}
      height={24}
      viewBox={'0 0 24 24'}
      aria-hidden={ariaHidden}
      className={className}
    >
      {title && <title>{title}</title>}
      <path d={icons[icon]}></path>
    </svg>
  )
}

Icon.propTypes = {
  ariaHidden: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.oneOf('twitter'),
  title: PropTypes.string.isRequired
}

Icon.defaultProps = {
  ariaHidden: true,
}