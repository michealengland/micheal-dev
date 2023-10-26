import React from 'react'
import AuthorBio from '@components/molecules/AuthorBio'
import Layout from '@components/organisms/Layout'
import PostContent from '@components/molecules/PostContent'
import PostHeader from '@components/molecules/PostHeader'
// import PostNavigation from '@components/molecules/PostNavigation'
import formatBlogDate from '@utilities/formatBlogDate'
import {allPosts} from 'contentlayer/generated'
import {getMDXComponent} from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({slug: post._raw.flattenedPath}))

// export const generateMetadata = ({params}:any) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
//   return {
//     title: post?.title,
//     description: post?.description
//   }
// }

const PostLayout = ({params}: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug) ||
  {
    title: '',
    date: '',
    body: {
      code: ''
    }
  }
  const Content = getMDXComponent(post.body.code)

  return (
    <>
      <PostHeader
        title={post.title}
        content={formatBlogDate(post.date)}
      />
      <PostContent>
        <Content />
        <h1>test</h1>
        {/* <AuthorBio /> */}
      </PostContent>
      {/* <PostNavigation
                nextLabel={next?.frontmatter?.title}
                nextTo={next?.fields?.slug && `/blog${next?.fields?.slug}`}
                prevLabel={previous?.frontmatter?.title}
                prevTo={previous?.fields?.slug && `/blog${previous?.fields?.slug}`}
            /> */}
    </>
  )
}

export default PostLayout