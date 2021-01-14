import React from 'react'
import Link from '@components/atoms/link'
import ProptTypes from 'prop-types'

const Button = ({label, to}) => (
  <Link to={to}>
    {label}
  </Link>
)

export default Button

Button.propTypes = {
  label: ProptTypes.string,
  to: ProptTypes.string,
}
