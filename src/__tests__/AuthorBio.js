import React from 'react'
import renderer from 'react-test-renderer'
import AuthorBio from '@components/molecules/AuthorBio'
import {StaticQuery} from 'gatsby'
// Setup StaticQuery mock.
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({render}) =>
    render({
	  site: {
        siteMetadata: {
		  author: 'Mike England',
		  social: {
            twitter: 'https://example.com',
		  },
        },
	  }
    })
  )
})


describe('AuthorBio', () => {
  it('renders correctly', () => {
    const data = {
      site: {
        siteMetadata: {
          author: 'Mike England',
          social: {
            twitter: 'https://example.com',
          },
        },
      }
    }
    const tree = renderer.create(<AuthorBio data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
