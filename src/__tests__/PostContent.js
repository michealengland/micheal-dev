import React from 'react'
import renderer from 'react-test-renderer'
import PostContent from '@components/molecules/PostContent'
describe('PostContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <PostContent className="post-content">
        <p>Test</p>
      </PostContent>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
