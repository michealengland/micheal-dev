import React from 'react'
import PropTypes from 'prop-types'
import Heading from '@components/atoms/Heading'
import Link from '@components/atoms/Link'
import createMarkup from '@utilities/createMarkup'

export default function Posts({posts}) {
  return (
    <>
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
          <article key={index}>
            { slug && title &&
            <Heading tag="h2">
              <Link to={`blog${slug}`}>
                {title}
              </Link>
            </Heading>
            }
            {date && <small>{date}</small>}
            {excerpt && <p dangerouslySetInnerHTML={createMarkup(excerpt)} />}
          </article>
        )
      })}
    </>
  )
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object)
}
