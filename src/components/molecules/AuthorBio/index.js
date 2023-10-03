import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Avatar from '@images/mle-12-05-21-512x512.jpeg'
import styles from './AuthorBio.module.css'

export default function AuthorBio() {
  return (
    <StaticQuery
      query={authorQuery}
      render={(data) => {
        const {author} = data.site.siteMetadata
        return (
          <div className={styles.authorBio}>
            <img className={styles.avatar} src={Avatar} alt="Micheal England" />
            <p className={styles.content}>
              Article by <strong>{author}</strong>.
            </p>
          </div>
        )
      }}
    />
  )
}

const authorQuery = graphql`
  query AuthorQuery {
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`
