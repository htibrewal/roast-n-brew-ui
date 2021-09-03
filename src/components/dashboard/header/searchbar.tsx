import { SvgIcon } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import {ReactComponent as SearchIcon} from '../../../icons/search.svg';

const useStyles = makeStyles({
  searchIcon: {
    marginRight: 'var(--spacing-3)',
    '& > path': {
      fill: 'var(--primary-color) !important'
    }
  }
});

const Searchbar = () => {
  const classes = useStyles();

  return (
    <div className='searchbar-wrapper'>
      <SvgIcon component={SearchIcon} className={classes.searchIcon}>
      </SvgIcon>

      <input type='text' className='search-text' placeholder='Search Teammates' />
    </div>
  )
}

export default Searchbar;