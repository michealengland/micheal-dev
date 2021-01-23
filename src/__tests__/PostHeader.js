import React from 'react'
import renderer from 'react-test-renderer'
import PostHeader from '@components/molecules/PostHeader'

describe('PostHeader', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PostHeader
          title="Post Header Title"
          content="Header content goes here..."
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
