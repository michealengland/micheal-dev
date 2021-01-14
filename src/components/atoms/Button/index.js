import React from 'react'
import Link from '@components/atoms/link'
import ProptTypes from 'prop-types'
import styles from './Button.module.css'
import cn from 'classnames'

export default function Button({className, label, to}) {
  return (
    <Link className={cn(styles.button, className)} to={to}>
      {label}
    </Link>
  )
}

Button.propTypes = {
  className: ProptTypes.string,
  label: ProptTypes.string,
  to: ProptTypes.string,
}
