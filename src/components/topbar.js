import React from 'react';
import { Link } from 'gatsby';
import { FaSearch } from 'react-icons/fa';

const Topbar = () => {
  return(
  <div className='TopbarStyle'>
    <Link to='/' title='Blogerist' className='logo'>Blogerist</Link>
    <div className='right'>
      <Link to='/search' name='search' title='Search'><FaSearch className='ico' /></Link>
    </div>
  </div>
  );
}
export default Topbar;
