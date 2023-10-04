import Layout from '@components/organisms/Layout'
import PropTypes from 'prop-types'
import PostHeader from '@components/molecules/PostHeader'
import Posts from '@components/molecules/Posts'
import { allPosts } from 'contentlayer/generated'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Checkout of a few of the JavaScript, Git, and other dev related topics that I\'ve written on my career path.',
}

export default function Blog() {
  // Sort by descending order.
  allPosts.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <Layout>
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