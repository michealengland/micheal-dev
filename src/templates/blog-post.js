import React from 'react'
import {graphql} from 'gatsby'
import {MDXRenderer} from 'gatsby-plugin-mdx'
import AuthorBio from '@components/molecules/AuthorBio'
import Layout from '@components/organisms/Layout'
// import SEO from '../components/seo'
import PostContent from '@components/molecules/PostContent'
import PostHeader from '@components/molecules/PostHeader'
import PostNavigation from '@components/molecules/PostNavigation'

export default function BlogPostTemplate({data, location, pageContext}) {
  const post = data.mdx
  const {previous, next} = pageContext

  return (
    <Layout>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
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
        nextTo={next?.fields?.slug}
        prevLabel={previous?.frontmatter?.title}
        prevTo={previous?.fields?.slug}
      />
    </Layout>
  )
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
