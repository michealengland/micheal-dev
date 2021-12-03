import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import AuthorBio from '@components/molecules/AuthorBio'
import Layout from '@components/organisms/Layout'
import SEO from '@components/atoms/SEO'
import PostContent from '@components/molecules/PostContent'
import PostHeader from '@components/molecules/PostHeader'
import PostNavigation from '@components/molecules/PostNavigation'

export default function BlogPostTemplate({data, pageContext}) {
  const post = data.mdx
  const {previous, next} = pageContext

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} | Blog `}
        description={post.frontmatter.description || post.excerpt}
      />
      <PostHeader
        title={post.frontmatter.title}
        content={post.frontmatter.date}
      />
      <PostContent>
        <MDXRenderer>{post.body}</MDXRenderer>
        <AuthorBio />
      </PostContent>
      <PostNavigation
        nextLabel={next?.frontmatter?.title}
        nextTo={next?.fields?.slug && `/blog${next?.fields?.slug}`}
        prevLabel={previous?.frontmatter?.title}
        prevTo={previous?.fields?.slug && `/blog${previous?.fields?.slug}`}
      />
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date
        description
      }
    }
  }
`
