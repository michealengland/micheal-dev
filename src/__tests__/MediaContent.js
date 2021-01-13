import React, {Fragment} from 'react'
import renderer from 'react-test-renderer'
import MediaContent from '@components/molecules/MediaContent'

describe('MediaContent', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Fragment>
          <MediaContent
            content={'MediaContent subtitle.'}
            img={'./images/wcus2018-hall-track-1.jpg'}
            title={'MediaContent title.'}
          />
          <MediaContent
            content={'MediaContent subtitle.'}
            img={'./images/wcus2018-hall-track-1.jpg'}
            imgAlt="img alt content"
            imgClipRight={true}
            title={'MediaContent title.'}
            titleTag="h3"
          />
        </Fragment>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
