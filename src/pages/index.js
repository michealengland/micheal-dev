import * as React from 'react'
import Layout from '@components/organisms/Layout'
import Hero from '@components/molecules/Hero'
import Content from '@components/molecules/Content'
import MediaContent from '@components/molecules/MediaContent'
import ContentCTA from '@components/molecules/ContentCTA'
import SEO from '@components/atoms/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Mike England"
        description="I'm a Frontend Engineer at WebDevStudios, and I'm passionate about all things JavaScript."
      />
      <Hero
        title="I'm Mike England"
        content="Frontend Engineer / Designer / Motorcycle Enthusiast"
        img="/images/adrien-converse-REL986jyuX4-unsplash.jpg"
      />
      <Content
        title="About Me"
        titleTag="h2"
        content="I'm a Frontend Engineer at WebDevStudios, and I'm passionate about all things JavaScript. Building awesome websites, tools, and web applications is my passion!"
      />
      <MediaContent
        imgClipRight={true}
        img="/images/anas-alshanti-feXpdV001o4-unsplash.jpg"
        title="Code Skills"
        content={`
        <p>I enjoy writing clean code and creating user experiences. Here are some of the areas I'm focused on currently:</p>
        <ul>
          <li>JavasScript</li>
          <li>Gutenberg Blocks</li>
          <li>React</li>
          <li>Webpack</li>
          <li>Gatsby</li>
          <li>Next.js</li>
          <li>Jest (WIP)</li>
        </ul>
        `}
      />
      <MediaContent
        img="/images/harpal-singh-_zKxPsGOGKg-unsplash.jpg"
        title="Design Skills"
        content="<p>Like many front-enders I started out as a designer, creating everything from branding projects to website concepts. Taking inspiration from my experiences designing projects and apply that to components and user interfaces.</p>"
      />
      <MediaContent
        imgClipRight={true}
        img="/images/github-contributions-edited.jpg"
        title="#100DaysOfCode"
        content="<p>Whether you're a seasoned engineer or new to development, #100DaysOfCode is a fun and exciting way to level up. Currently, I'm on my second round, and I'm focused on making React applications, unit testing with Jest, and diving deeper in advanced JavaScript techniques.</p>"
      />
      <ContentCTA
        content={
          'Being an engineer is awesome! One of the best perks is solving code challenges and building out the "What if...?" ideas. While most of my work is on private repos, I love to share the side projects and ideas.'
        }
        label="View My Github"
        title="Checkout My Code"
        url="https://github.com/michealengland?tab=repositories"
      />
      <ContentCTA
        content="Follow me on Twitter! I enjoy sharing code tips and projects that I'm working on."
        img="./images/adrien-converse-kCrrUx7US04-unsplash.jpg"
        label="@mikelikethebike"
        title="Let's Connect"
        url="https://twitter.com/mikelikethebike"
      />
    </Layout>
  )
}

export default IndexPage
