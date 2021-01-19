import React from 'react'
import {graphql} from 'gatsby'
import TextLink from '@components/atoms/TextLink'
import {MDXRenderer} from 'gatsby-plugin-mdx'
// import Bio from '../components/bio'
import Layout from '@components/organisms/Layout'
// import SEO from '../components/seo'

export default function BlogPostTemplate({data, location, pageContext}) {
  const post = data.mdx
  // const siteTitle = data.site.siteMetadata.title
  const siteTitle = 'MEOw mEOW'
  const {previous, next} = pageContext

  return (
    <Layout
      location={location}
      title={siteTitle}
    >
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      /> */}
      <h1>{post.frontmatter.title}</h1>
      <p>
        {post.frontmatter.date}
      </p>
      <MDXRenderer>{post.body}</MDXRenderer>
      <hr/>
      {/* <Bio /> */}

      <ul>
        <li>
          {previous && (
            <TextLink to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </TextLink>
          )}
        </li>
        <li>
          {next && (
            <TextLink to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </TextLink>
          )}
        </li>
      </ul>
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
    mdx(fields: { slug: { eq: $slug } }) {
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
