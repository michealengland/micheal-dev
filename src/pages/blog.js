import React from 'react'
// import SEO from '../components/seo'
import Layout from '@components/organisms/Layout'
import Heading from '@components/atoms/Heading'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Posts from '@components/molecules/Posts'
export default function Blog({data}) {
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      {/* <SEO title="All posts" /> */}
      <section>
        <Heading tag="h1">Blog</Heading>
        <Posts posts={posts} />
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
