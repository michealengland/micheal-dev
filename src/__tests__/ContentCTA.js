import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import ContentCTA from '@components/molecules/ContentCTA'

describe('ContentCTA', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <ContentCTA
            content="Content..."
            label="Button Label"
            title="Content CTA"
            url="https://codepen.io/mengland/pens/"
          />
          <ContentCTA
            content="Content..."
            img="./images/ash-goldsbrough-1092046-unsplash.jpg"
            label="Button Label"
            title="Content CTA with Image"
            url="https://twitter.com/mikelikethebike"
          />
        </Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
