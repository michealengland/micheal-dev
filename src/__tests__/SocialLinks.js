import React from 'react'
import renderer from 'react-test-renderer'
import SocialLinks from '@components/molecules/SocialLinks'
describe('SocialLinks', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SocialLinks />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})