import React from 'react'
import Link from '@components/atoms/Link'
import Logo from '@content/assets/me-icon.png'

export default function Header() {
  return <header>
    <h1>
      <Link to={ '/' }>
        <img src={ Logo } alt="Micheal.dev logo" />
      </Link>
    </h1>
    <nav>
      <ul>
        <li>
          <Link to={ '/blog' }>Blog</Link>
        </li>
      </ul>
    </nav>
  </header>
}
