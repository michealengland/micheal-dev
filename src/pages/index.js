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
        description="I'm a Development Team Lead at Kinsta, and I'm passionate about building cool things using JavaScript."
      />
      <Hero
        title="Hi! I'm Mike England"
        content="I love to laugh at my own jokes, drift cars, and build projects with React & JavaScript."
        img="/images/halloween-jam-drift-350z-2000x1000.jpeg"
      />
      <Content
        title="About Me"
        titleTag="h2"
        content={'Currently, I manage a software development team that is focused on developing and maintaining the application and database services at <a href="https://kinsta.com/">Kinsta</a>.'}
      />
      <MediaContent
        imgClipRight={true}
        img="/images/anas-alshanti-feXpdV001o4-unsplash.jpg"
        title="Career Skills"
        content={`
        <p>In April 2022, I was promoted to a Development Team Lead position, which shifted my focus away from coding on a regular basis. Don't worry; I still love working on personal projects and helping out! Here are some of my current skills:</p>
        <ul>
          <li>Performance Reviews</li>
          <li>Coaching & Mentoring</li>
          <li>Team Management & Growth</li>
          <li>NodeJS</li>
          <li>JavaScript / TypeScript</li>
          <li>React</li>
          <li>Gutenberg</li>
        </ul>
        `}
      />
      <MediaContent
        img="/images/harpal-singh-_zKxPsGOGKg-unsplash.jpg"
        title="Design Background"
        content="<p>I believe it's important to remember where you started, and my journey began as a designer. I spent years in the field, creating everything from branding projects to website concepts. To this day, I apply many design disciplines to create, build, and test applications.</p>"
      />
      <MediaContent
        imgClipRight={true}
        img="/images/350zduino-1080x720.jpg"
        title="Arduino & Drifting"
        content={'<p>In my free time, I like to find ways to combine my passion for technology with my love for drifting cars. In one of my recent projects, I made an OBDII reader that connects to my <a href="https://github.com/michealengland/350z-drift-elmduino">Nissan 350z using an ESP32 microcontroller and bluetooth</a>.</p>'}
      />
      <ContentCTA
        content="I enjoy solving challenges and creating products with code. In fact, you can find this entire website, along with many of my other personal projects, on my GitHub profile."
        label="View My GitHub Profile"
        title="Checkout some of my work"
        url="https://github.com/michealengland?tab=repositories"
      />
      <ContentCTA
        content="Follow me on Twitter! I enjoy sharing code tips and projects that I'm working on."
        img="/images/prague-library-2000x1000.jpg"
        label="@mikelikethebike"
        title="Let's Connect"
        url="https://twitter.com/mikelikethebike"
      />
    </Layout>
  )
}

export default IndexPage
