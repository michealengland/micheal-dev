import * as React from 'react'
import Layout from '@components/molecules/Layout'
import Hero from '@components/molecules/Hero'
import Content from '@components/molecules/Content'
import MediaContent from '@components/molecules/MediaContent'

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
      <MediaContent
        // backgroundColor={ `#f2e6f0` }
        // imgClip={ true }
        img="/images/farzad-nazifi-71686-unsplash.jpg"
        title="Code Skills"
        content={`
        <p>I enjoy writing clean code and creating user experiences. Here are some of the areas I'm focused on currently.</p>
        <ul>
          <li>JavasScript</li>
          <li>Gutenberg</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Gatsby</li>
          <li>Jest (WIP)</li>
        </ul>
        `}
      />
    </Layout>
  )
}

export default IndexPage
