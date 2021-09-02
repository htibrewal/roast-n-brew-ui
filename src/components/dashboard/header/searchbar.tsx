import React from 'react';
import { ReactComponent as SearchIcon } from '../../../icons/search.svg';

const Searchbar = () => {
  return (
    <div className='searchbar-wrapper'>
      <SearchIcon className='search-icon' fill='#7165ff' />

      <input type='text' className='search-text' placeholder='Search Teammates' />
    </div>
  )
}

export default Searchbar;