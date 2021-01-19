import React from 'react'
import renderer from 'react-test-renderer'
import TextLink from '../components/atoms/TextLink'
describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TextLink to="/">Home Link</TextLink>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
