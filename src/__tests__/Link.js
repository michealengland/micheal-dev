import React from 'react'
import renderer from 'react-test-renderer'
import Link from '../components/atoms/Link'
describe('Link', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Link to="/">Home Link</Link>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
