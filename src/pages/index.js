import * as React from 'react'
import Layout from '@components/molecules/Layout'
import Hero from '@components/molecules/Hero'
import Content from '@components/molecules/Content'

const IndexPage = () => {
  return (
    <Layout>
      <Hero
        title={'I\'m Mike England'}
        content={'Frontend Engineer / Designer / Motorcycle Enthusiast'}
        img={'./images/wcus2018-hall-track-1.jpg'}
      />
      <Content
        title={ 'About Me' }
        titleTag="h2"
        content={ 'I\'m a Frontend Engineer at WebDevStudios and I\'m passionate about all things JavaScript. Building awesome websites, tools, and web applications is my passion!' }
      />
    </Layout>
  )
}

export default IndexPage
