import PropTypes from 'prop-types'
import React from 'react'

export default function Hero({title, content, linkText, linkTo, img}) {
  return (
    <section>
      <div>
        { title && <h1>{ title }</h1>}
        { content &&
          <>
            <hr />
            <p>{ content }</p>
          </>
        }
        {/* <LinkButton to={ linkTo }>{linkText}</LinkButton> */}
      </div>
    </section>
  )
}

Hero.propTypes = {
  content: PropTypes.string,
  linkText: PropTypes.string,
  linkTo: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
}
