import * as React from 'react'
import Layout from '@components/organisms/Layout'
import Error404 from '@components/organisms/Error404'

const NotFoundPage = () => {
  return (
    <Layout>
      <Error404
        title="404 page not found"
        content="This page is missing or does not exist."
      />
    </Layout>
  )
}

export default NotFoundPage
