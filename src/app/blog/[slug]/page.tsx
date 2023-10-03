// import AuthorBio from '@components/molecules/AuthorBio'
import Layout from '@components/organisms/Layout'
// import SEO from '@components/atoms/SEO'
import PostContent from '@components/molecules/PostContent'
import PostHeader from '@components/molecules/PostHeader'
// import PostNavigation from '@components/molecules/PostNavigation'
import formatBlogDate from '@utilities/formatBlogDate'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  return { title: post?.title }
}

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  const Content = getMDXComponent(post.body.code)

  return (
        <Layout>
            <PostHeader
                title={post.title}
                content={formatBlogDate(post.date)}
            />
            <PostContent>
                <Content />
                {/* <AuthorBio /> */}
            </PostContent>
            {/* <PostNavigation
                nextLabel={next?.frontmatter?.title}
                nextTo={next?.fields?.slug && `/blog${next?.fields?.slug}`}
                prevLabel={previous?.frontmatter?.title}
                prevTo={previous?.fields?.slug && `/blog${previous?.fields?.slug}`}
            /> */}
        </Layout>
  )
}

export default PostLayout