import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import TextLink from '../components/atoms/TextLink'
describe('TextLink', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <TextLink to="/">Home Link</TextLink>
          <TextLink to="https://micheal.dev">Home Link</TextLink>
        </Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
