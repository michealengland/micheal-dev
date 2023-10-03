'use client'
import React from 'react'
// import SEO from '@components/atoms/SEO'
import Layout from '@components/organisms/Layout'
import PropTypes from 'prop-types'
import PostHeader from '@components/molecules/PostHeader'
import Posts from '@components/molecules/Posts'
import { allPosts } from 'contentlayer/generated'

export default function Blog() {
  // Sort by descending order.
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <Layout>
      {/* <SEO
        title="Blog | Mike England"
        description="Learn about JavaScript, React, and other platforms that I've used to build awesome projects with."
      /> */}
      <section>
        <PostHeader title="Blog" />
        <Posts posts={allPosts} />
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.object
  })
}