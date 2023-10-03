'use client'
import React from 'react'
// import SEO from '@components/atoms/SEO'
import Layout from '@components/organisms/Layout'
import PropTypes from 'prop-types'
import PostHeader from '@components/molecules/PostHeader'
import Posts from '@components/molecules/Posts'
import { allPosts } from 'contentlayer/generated'

export default function Blog() {
  const posts = allPosts

  return (
    <Layout>
      {/* <SEO
        title="Blog | Mike England"
        description="Learn about JavaScript, React, and other platforms that I've used to build awesome projects with."
      /> */}
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