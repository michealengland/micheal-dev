import * as React from 'react'
import Layout from '@components/organisms/Layout'
import Error404 from '@components/organisms/Error404'

const NotFoundPage = () => {
  return (
    <Layout>
      <Error404
        title="404 Page Not found"
        content="You just hit a route that doesn't exist... the sadness."
        img="/images/adrien-converse-REL986jyuX4-unsplash.jpg"
        label="Back to Micheal.dev"
      />
    </Layout>
  )
}

export default NotFoundPage
