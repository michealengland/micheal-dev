import React from 'react'
import renderer from 'react-test-renderer'
import SocialShare from '@components/molecules/SocialShare'
describe('SocialShare', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SocialShare />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
