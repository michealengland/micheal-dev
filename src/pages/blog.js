import React from 'react'
import SEO from '@components/atoms/SEO'
import Layout from '@components/organisms/Layout'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import PostHeader from '@components/molecules/PostHeader'
import Posts from '@components/molecules/Posts'
export default function Blog({data}) {
  const posts = data?.allMdx?.nodes

  return (
    <Layout>
      <SEO
        title="Blog | Mike England"
        description="Learn about JavaScript, React, and other platforms that I've used to build awesome projects with."
      />
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
  })
}

export const pageQuery = graphql`
  query BlogQuery {
    allMdx(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      nodes {
        excerpt
        frontmatter {
          title
          date
        }
        slug
      }
    }
  }
`
