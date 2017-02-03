import React, { PropTypes } from 'react';

const GifGrid = (props) => {
  return (
    <div>
      {props.results.map((result, i) => {
        console.log(result.thumbnail);
        return (
          <img
            alt="Cats & kittens!"
            key={i}
            src={result.thumbnail}
            style={{
              width: '200px',
              height: '200px'
            }}
          />
        )
      })}
    </div>
  )
}

GifGrid.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      thumbnail: PropTypes.string.required,
      original: PropTypes.string.required
    }).isRequired
  ).isRequired
}

export default GifGrid;