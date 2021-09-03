import { SvgIcon } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import {ReactComponent as Coin} from '../../../icons/coin.svg';

const useStyles = makeStyles({
  coinIcon: {
    marginRight: 'var(--spacing-1)',
    '& > path': {
      fill: 'var(--coin-color) !important'
    }
  }
});

const Coins = () => {
  const classes = useStyles();

  return (
    <div className='center-flex-row coin-badge'>
      <SvgIcon component={Coin} className={classes.coinIcon} />

      <span className='coin-count'>
        43257
      </span>
    </div>
  )
}

export default Coins;