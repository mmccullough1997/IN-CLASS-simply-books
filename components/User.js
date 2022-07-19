/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import PropTypes from 'prop-types';

function User({
  image, name, email, lastLogin,
}) {
  return (
    <div>
      <img src={image} alt={name}></img>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <h3>{lastLogin}</h3>
    </div>
  );
}

User.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg',
  name: 'Mitch',
  email: 'mitchmcculough@gmail.com',
  lastLogin: '5/4/22 0916 CST',
};

export default User;
