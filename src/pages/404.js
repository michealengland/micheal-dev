import * as React from 'react'
import Layout from '@components/organisms/Layout'
import Error404 from '@components/organisms/Error404'

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Error404
        title="404 Page not found."
        content="Sorry, the content you're looking for is missing."
      />
    </Layout>
  )
}

export default NotFoundPage
