import React, { PropTypes } from 'react';

import GifGrid from './GifGrid';

const Results = (props) => {
  if (props.results === undefined) {
    return <h2>Go get the kittens!</h2>
  }
  return (
    <GifGrid results={props.results} />
  )
}

Results.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.isRequired,
      original: PropTypes.string.isRequired
    }).isRequired
  )
}

export default Results;