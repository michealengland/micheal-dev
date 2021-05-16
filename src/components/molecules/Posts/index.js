import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'
import TextLink from '@components/atoms/TextLink'
import styles from './Posts.module.css'

// TODO Refactor this component with more strict props.
// TODO Create snapshot test.

export default function Posts({posts}) {
  return (
    <section className={styles.posts}>
      <div className={styles.inner}>
        {!! posts?.length > 0 && posts.map((post, index) => {
          const {
            excerpt,
            frontmatter:{
              date,
              title
            },
            slug
          } = post

          return (
            <article className={styles.post} key={index}>
              { slug && title &&
                <Heading className={styles.title} tag="h2">
                  <TextLink to={`${slug}`}>
                    {title}
                  </TextLink>
                </Heading>
              }
              {date && <small className={styles.date}>{date}</small>}
              {excerpt && <p className={styles.content}>{excerpt}</p>}
            </article>
          )
        })}
      </div>
    </section>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}
