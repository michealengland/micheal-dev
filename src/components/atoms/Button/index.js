import React from 'react'
import Link from '@components/atoms/link'
import ProptTypes from 'prop-types'
import styles from './Button.module.css'
import cn from 'classnames'

const Button = ({className, label, to}) => (
  <Link className={cn(styles.button, className)} to={to}>
    {label}
  </Link>
)

export default Button

Button.propTypes = {
  className: ProptTypes.string,
  label: ProptTypes.string,
  to: ProptTypes.string,
}
