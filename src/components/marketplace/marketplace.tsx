import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import HeadingCard from '../heading-card/heading-card';
import ConfirmModal from '../share-feedback/confirm-modal';
import ConfirmItemModal from './confirm-item-modal';
import { MARKETPLACE_ITEMS_1, MARKETPLACE_ITEMS_2, MARKETPLACE_ITEMS_3 } from './constants';
import MarketplaceItem from './marketplace-item';

const Marketplace = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <HeadingCard
        title='Place the order by using your coins!'
        description='The admin will approve your order and ship it in the next shipment, which happens once every two months.'
      />

      <Box mb={5}>
        <div className='center-flex-col'>
          <div className='center-flex-row'>
            {MARKETPLACE_ITEMS_1.map((marketplaceItem) => (
              <MarketplaceItem { ...marketplaceItem } />
            ))}
          </div>

          <hr className='marketplace-item-divider' />

          <div className='center-flex-row'>
            {MARKETPLACE_ITEMS_2.map((marketplaceItem) => (
              <MarketplaceItem { ...marketplaceItem } />
            ))}
          </div>

          <hr className='marketplace-item-divider' />

          <div className='center-flex-row'>
            {MARKETPLACE_ITEMS_3.map((marketplaceItem) => (
              <MarketplaceItem { ...marketplaceItem } />
            ))}
          </div>
        </div>
      </Box>

      <ConfirmItemModal open={open} handleClose={handleClose} />
    </>
  )
}

export default Marketplace;