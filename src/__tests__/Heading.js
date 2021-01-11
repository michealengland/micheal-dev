import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import Heading from '../components/atoms/Heading'
describe('Heading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Fragment>
        <Heading>Default</Heading>
        <Heading tag="h1">H1</Heading>
        <Heading tag="h2">H2</Heading>
        <Heading tag="h3">H3</Heading>
        <Heading tag="h4">H4</Heading>
        <Heading tag="h5">H5</Heading>
        <Heading tag="h6">H6</Heading>
      </Fragment>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
