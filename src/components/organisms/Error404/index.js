import React from 'react'
import {Link} from 'gatsby'

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
