import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import Icon from '@components/atoms/Icon'
describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <Icon icon="github" className="test-icon" ariaHidden={true} />
          <Icon icon="linkedin" />
          <Icon icon="twitter" />
        </Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
