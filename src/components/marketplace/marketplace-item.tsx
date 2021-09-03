import { SvgIcon } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import React from 'react';
import { MarketplaceItemI } from '../../interfaces/marketplace-item';
import {ReactComponent as Coin} from '../../icons/coin.svg';
import Button from '../button/button';

const useStyles = makeStyles({
  coinIcon: {
    height: 'var(--spacing-6)',
    width: 'var(--spacing-6)',
    marginRight: 'var(--spacing-1)',
    '& > path': {
      fill: 'var(--marketplace-coin-color) !important'
    }
  }
});

const MarketplaceItem = ({ imgUrl, itemName, coins }: MarketplaceItemI) => {
  const classes = useStyles();

  return (
    <div className='marketplace-item-wrapper'>
      <img src={imgUrl} className='marketplace-item-img' />

      <span className='marketplace-item-name'>
        { itemName }
      </span>

      <span className='marketplace-item-coins'>
        <SvgIcon component={Coin} className={classes.coinIcon} />

        { coins }
      </span>

      <Button text='Buy Now' size='sm' />
    </div>
  )
}

export default MarketplaceItem;