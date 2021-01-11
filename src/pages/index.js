import * as React from 'react'
import Layout from '../components/molecules/Layout'
import Hero from '../components/molecules/Hero'

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title={'I\'m Mike England'}
        content={'Frontend Engineer / Designer / Motorcycle Enthusiast'}
        img={'./images/wcus2018-hall-track-1.jpg'}
      />
    </Layout>
  )
}

export default IndexPage
