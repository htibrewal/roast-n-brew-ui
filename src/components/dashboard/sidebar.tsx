import React from 'react';
import SidebarLink, { SidebarLinkI } from './sidebar-link';
import market from '../../icons/marketplace.svg';

const navLinks: SidebarLinkI[] = [
  {
    icon: market,
    title: 'Feed'
  },
  {
    icon: market,
    title: 'Share Feedback'
  },
  {
    icon: market,
    title: 'Request Feedback'
  },
  {
    icon: market,
    title: 'Marketplace'
  }
]

const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
      {navLinks.map(({ icon, title }, index) => (
        <SidebarLink icon={icon} title={title} />
      ))}
    </div>
  )
}

export default Sidebar;