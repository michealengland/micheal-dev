import * as React from 'react'
import Layout from '@components/organisms/Layout'
import Hero from '@components/molecules/Hero'
import Content from '@components/molecules/Content'
import MediaContent from '@components/molecules/MediaContent'
import ContentCTA from '@components/molecules/ContentCTA'
import HeroBackgroundImage from '@assets/prague-cityscape-2000x1000.jpg'
import ContentImage1 from '@assets/anas-alshanti-feXpdV001o4-unsplash.jpg'
import ContentImage2 from '@assets/harpal-singh-_zKxPsGOGKg-unsplash.jpg'
import ContentImage3 from '@assets/350zduino-1080x720.jpg'
import ContentImage4 from '@assets/prague-library-2000x1000.jpg'

export default function TestPage() {
  return (
    <Layout>
      <Hero
        title="Mike England"
        content="Development Team Lead @Kinsta"
        img={HeroBackgroundImage.src}
      />
      <Content
        title="About Me"
        titleTag="h2"
        content={'I\'m a Development Team Lead at <a href="https://kinsta.com/">Kinsta</a> and I\'m passionate about building awesome products, tools, and web applications.'}
      />
      <MediaContent
        imgClipRight={true}
        img={ContentImage1.src}
        title="Career Skills"
        content={`
        <p>In April of 2022, I transitioned to a development team lead role which shifted my focus away from React, JavaScript, Node, and Jest. Don't worry, I still love doing personal projects and helping out! Now, I'm more focused on leading and managing a team.</p>
        <ul>
          <li>Performance Reviews & 1:1s</li>
          <li>Mentoring</li>
          <li>Product Ownership</li>
          <li>Team Management & Growth</li>
          <li>Coordinatin
        </ul>
        `}
      />
      <MediaContent
        img={ContentImage2.src}
        title="Design Background"
        content="<p>I believe it's important to remember where you started and my journey started out designer. I spent years in the field creating everything from branding projects to website concepts. To this day, I apply many designer disciplines into creating, building, and testing applications.</p>"
      />
      <MediaContent
        imgClipRight={true}
        img={ContentImage3.src}
        title="Arduino & Drifting"
        content="<p>In my free time, I try to combine my love of tech and drifting to do some fun projects on my 350z!</p>"
      />
      <ContentCTA
        content={'I enjoy solving challenges and creating products with code. In fact, this entire website along with many of my other personal projects are on GitHub.'}
        label="View My GitHub Profile"
        title="Checkout some of my work"
        url="https://github.com/michealengland?tab=repositories"
      />
      <ContentCTA
        content="Follow me on Twitter! I enjoy sharing code tips and projects that I'm working on."
        img={ContentImage4.src}
        label="@mikelikethebike"
        title="Let's Connect"
        url="https://twitter.com/mikelikethebike"
      />
    </Layout>
  )
}
