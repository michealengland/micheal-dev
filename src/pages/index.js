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
        description="I'm a JavaScript Developer at Kinsta, and I'm passionate about building cool things using JavaScript."
      />
      <Hero
        title="I'm Mike England"
        content="JavaScript Developer / Motorcycle Enthusiast"
        img="/images/adrien-converse-REL986jyuX4-unsplash.jpg"
      />
      <Content
        title="About Me"
        titleTag="h2"
        content={'I\'m a JavaScript Developer at <a href="https://kinsta.com/">Kinsta</a> and I\'m passionate about building awesome websites, tools, and web applications using JavaScript.'}
      />
      <MediaContent
        imgClipRight={true}
        img="/images/anas-alshanti-feXpdV001o4-unsplash.jpg"
        title="Code Skills"
        content={`
        <p>Here are some of the areas I'm focused on currently:</p>
        <ul>
          <li>Gatsby</li>
          <li>Gutenberg</li>
          <li>JavaScript</li>
          <li>Jest</li>
          <li>Next.js</li>
          <li>Node</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Webpack</li>
        </ul>
        `}
      />
      <MediaContent
        img="/images/harpal-singh-_zKxPsGOGKg-unsplash.jpg"
        title="Design Background"
        content="<p>Like many front-enders I started out as a designer, creating everything from branding projects to website concepts. To this day, I apply many designer disciplines into creating, building, and testing applications.</p>"
      />
      <MediaContent
        imgClipRight={true}
        img="/images/github-contributions-edited.jpg"
        title="#100DaysOfCode"
        content="<p>Whether you're a seasoned engineer or new to development, #100DaysOfCode is a fun and exciting way to level up. Currently, I'm on my second round, and I'm focused on making React applications, unit testing with Jest, and diving deeper in advanced JavaScript techniques.</p>"
      />
      <ContentCTA
        content={'Being an engineer is awesome! Solving code challenges and building out the "What if..." ideas are what I the enjoy most. In my free time, I love to share open source projects that I\'m working on.'}
        label="View My GitHub Profile"
        title="Checkout some of my work"
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
