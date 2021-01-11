import React from 'react'
import renderer from 'react-test-renderer'
import Layout from '../components/molecules/Layout'
describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Layout><h1>Some content...</h1></Layout>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
