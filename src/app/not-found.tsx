import React from 'react'
import Layout from '@components/organisms/Layout'
import Error404 from '@components/organisms/Error404'
import MissingImage from '@assets/adrien-converse-REL986jyuX4-unsplash.jpg'
import {Metadata} from 'next'

export const metadata: Metadata = {
  title: '404 Content Missing',
  description: 'Sorry, this content is no longer available or doesn\'t exist.',
}

const NotFound = () => {
  return (
    <Layout>
      <Error404
        title="404 Page Not found"
        content="You just hit a route that doesn't exist... the sadness."
        img={MissingImage.src}
        label="Back to Micheal.dev"
      />
    </Layout>
  )
}

export default NotFound
