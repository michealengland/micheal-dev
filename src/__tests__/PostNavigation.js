import React from 'react'
import renderer from 'react-test-renderer'
import PostNavigation from '@components/molecules/PostNavigation'

describe('PostNavigation', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PostNavigation
          nextLabel="Next Label"
          nextTo="/blog/some-blog-link"
          prevLabel="Prev Label"
          prevTo="/blog/some-blog-link"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
