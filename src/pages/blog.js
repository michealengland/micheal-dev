import React from 'react'
// import SEO from '../components/seo'
import Layout from '@components/organisms/Layout'
import Link from '@components/atoms/Link'
import Heading from '@components/atoms/Heading'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import createMarkup from '@utilities/createMarkup'

export default function Blog({data}) {
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      {/* <SEO title="All posts" /> */}
      <section>
        <Heading tag="h1">Blog</Heading>
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
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.object)
    }),
  }),
}

export const pageQuery = graphql`
query BlogQuery {
  allMdx {
    totalCount
    nodes {
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      slug
    }
  }
}
`
