import React from 'react'
import renderer from 'react-test-renderer'
import Content from '@components/molecules/Content'
describe('Content', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Content
          title={'Content title.'}
          titleTag="h3"
          content="Text content..."
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
