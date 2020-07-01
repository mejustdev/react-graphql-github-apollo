import React from 'react';

import Link from '../../Link';

import './style.css';

const Footer = () => (
  <div className='Footer'>
    <div>
      <small>
        <span className='Footer-text'>Built by</span>{' '}
        <Link className='Footer-link' href='https://github.com/Mehmet-Ergorgec'>
          Me
        </Link>{' '}
        <span className='Footer-text'>with &hearts;</span>
      </small>
    </div>
  </div>
);

export default Footer;
