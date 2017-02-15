import React, { PropTypes } from 'react';
import classnames from 'classnames';

export default function Anime (props) {

  const { name, image, url, className, ...rest } = props;
  const cls = classnames('anime', className);

  const photoStyle = {
    height: '70px'
  };

  return (
    <div className={cls} {...rest}>
      <img src={image} style={photoStyle} />
      <span>{name}</span>
      <br />
      <a href={url} target='_blank'>{url}</a>
    </div>
  );
}

Anime.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};
