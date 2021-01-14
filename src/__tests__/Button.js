import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import Button from '@components/atoms/Button'

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <Button
            label="Internal Link"
            to="/"
          />
          <Button
            label="External Link"
            to="https://micheal.dev"
          />
          <Button
            to="https://micheal.dev"
          />
        </Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
