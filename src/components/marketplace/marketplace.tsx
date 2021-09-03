import React from 'react';
import HeadingCard from '../heading-card/heading-card';
import MarketplaceItem from './marketplace-item';

import buildProducts from '../../core-values/build-the-products-that-customers-love.svg';
import haveAudacious from '../../core-values/have-audacious-goals.svg';
import beHonest from '../../core-values/be-honest.svg';

const Marketplace = () => {
  return (
    <>
      <HeadingCard
        title='Place the order by using your coins!'
        description='The admin will approve your order and ship it in the next shipment, which happens once every two months.'
      />

      <div className='center-flex-col'>
        <div className='center-flex-row'>
          <MarketplaceItem
            itemName='Hevo Branded T-Shirt - Round Neck'
            imgUrl={buildProducts}
            coins={5000}
          />

          <MarketplaceItem
            itemName='Hevo Branded Water Bottle - Black'
            imgUrl={haveAudacious}
            coins={2500}
          />

          <MarketplaceItem
            itemName='Hevo Branded Black Laptop Mat'
            imgUrl={beHonest}
            coins={1500}
          />
        </div>

        <hr className='marketplace-item-divider' />

        <div className='center-flex-row'>
          <MarketplaceItem
            itemName='Hevo Branded T-Shirt - Round Neck'
            imgUrl={buildProducts}
            coins={5000}
          />

          <MarketplaceItem
            itemName='Hevo Branded Water Bottle - Black'
            imgUrl={haveAudacious}
            coins={2500}
          />

          <MarketplaceItem
            itemName='Hevo Branded Black Laptop Mat'
            imgUrl={beHonest}
            coins={1500}
          />
        </div>

        <hr className='marketplace-item-divider' />

        <div className='center-flex-row'>
          <MarketplaceItem
            itemName='Hevo Branded T-Shirt - Round Neck'
            imgUrl={buildProducts}
            coins={5000}
          />

          <MarketplaceItem
            itemName='Hevo Branded Water Bottle - Black'
            imgUrl={haveAudacious}
            coins={2500}
          />

          <MarketplaceItem
            itemName='Hevo Branded Black Laptop Mat'
            imgUrl={beHonest}
            coins={1500}
          />
        </div>
      </div>
    </>
  )
}

export default Marketplace;