import React from 'react'
import renderer from 'react-test-renderer'
import Error404 from '@components/organisms/Error404'
describe('Error404', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Error404
          title="404 page not found"
          content="This page is missing or does not exist."
          img="./images/adrien-converse-REL986jyuX4-unsplash.jpg"
          label="Back to Micheal.dev"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
