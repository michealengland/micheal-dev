import React from 'react'
import renderer from 'react-test-renderer'
import Hero from '../components/molecules/Hero'
describe('Hero', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Hero
          content={'Hero subtitle.'}
          img={'./images/wcus2018-hall-track-1.jpg'}
          title={'Hero title.'}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
