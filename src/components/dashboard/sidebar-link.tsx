import React from 'react';

export interface SidebarLinkI {
  icon: any;
  title: string;
}

const SidebarLink = ({ icon, title }: SidebarLinkI) => {
  return (
    <div className='sidebar-link'>
      <img src={icon} className='sidebar-link-icon' />
      <span className='sidebar-link-text'>
        {title}
      </span>
    </div>
  )
}

export default SidebarLink;