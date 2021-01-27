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
        description="Frontend Engineer / Designer / Motorcycle Enthusiast"
      />
      <Hero
        title="I'm Mike England"
        content="Frontend Engineer / Designer / Motorcycle Enthusiast"
        img='./images/adrien-converse-REL986jyuX4-unsplash.jpg'
      />
      <Content
        title="About Me"
        titleTag="h2"
        content="I'm a Frontend Engineer at WebDevStudios and I'm passionate about all things JavaScript. Building awesome websites, tools, and web applications is my passion!"
      />
      <MediaContent
        imgClipRight={ true }
        img="./images/anas-alshanti-feXpdV001o4-unsplash.jpg"
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
      <MediaContent
        img="./images/harpal-singh-_zKxPsGOGKg-unsplash.jpg"
        title="Design Skills"
        content="<p>Like many front-enders I started out as a designer creating everything from branding projects to website concepts.</p>"
      />
      <MediaContent
        imgClipRight={ true }
        img="./images/github-contributions-edited.jpg"
        title="100 Days of Code"
        content="<p>Outside of work, I'm participating in the #100DaysOfCode challenge. During this time I've been working leveling up my JavaScript skills, building out WordPress plugins, and recreating my site with Gatsby.</p>"
      />
      <ContentCTA
        content="Fun fact, I'm a huge fan of CodePen and love using it to create quick concepts."
        label="View CodePen"
        title="Find me on CodePen"
        url="https://codepen.io/mengland/pens/"
      />
      <ContentCTA
        content="Want to discuss a project? Message me on Twitter."
        img="./images/adrien-converse-kCrrUx7US04-unsplash.jpg"
        label="Message"
        title="Let's Connect"
        url="https://twitter.com/mikelikethebike"
      />
    </Layout>
  )
}

export default IndexPage
