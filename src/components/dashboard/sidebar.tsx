import React from 'react';
import SidebarLink, { SidebarLinkI } from './sidebar-link';

import feed from '../../icons/feed.svg';
import flash from '../../icons/flash.svg';
import feedback from '../../icons/feedback.svg';
import market from '../../icons/marketplace.svg';

const navLinks: SidebarLinkI[] = [
  {
    icon: feed,
    title: 'Feed',
    url: 'feed'
  },
  {
    icon: flash,
    title: 'Share Feedback',
    url: 'share-feedback'
  },
  {
    icon: feedback,
    title: 'Request Feedback',
    url: 'request-feedback'
  },
  {
    icon: market,
    title: 'Marketplace',
    url: 'marketplace'
  }
]

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      {navLinks.map((navLink, index) => (
        <SidebarLink { ...navLink } />
      ))}
    </div>
  )
}

export default Sidebar;