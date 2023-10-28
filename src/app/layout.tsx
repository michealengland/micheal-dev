import React from 'react'
import '@fontsource/mulish/300.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/600.css'
import '@fontsource/mulish/700.css'
import './styles.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    template: '%s | Micheal England',
    default: 'Micheal England', // a default is required when creating a template
  },
  description: 'I\'m a Development Team Lead at Kinsta, and I\'m passionate about building cool things using JavaScript.',
  themeColor: 'purple',
  twitter: {
    card: 'summary_large_image',
    title: 'micheal.dev',
    description: 'Development Team Lead at Kinsta',
    siteId: 'mikelikethebike',
    creator: 'Micheal England',
    creatorId: 'mikelikethebike',
    images: ['https://nextjs.org/og.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
