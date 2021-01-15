import React from 'react'
// import SEO from '../components/seo'
import Layout from '@components/organisms/Layout'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import PostHeader from '@components/molecules/PostHeader'
import Posts from '@components/molecules/Posts'
export default function Blog({data}) {
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      {/* <SEO title="All posts" /> */}
      <section>
        <PostHeader title="Blog" />
        <Posts posts={posts} />
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object
  }),
}

export const pageQuery = graphql`
query BlogQuery {
  allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
