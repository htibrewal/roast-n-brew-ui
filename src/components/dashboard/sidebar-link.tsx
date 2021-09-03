import React from 'react';
import { NavLink } from 'react-router-dom';

export interface SidebarLinkI {
  icon: any;
  title: string;
  url: string;
}

const SidebarLink = ({ icon, title, url }: SidebarLinkI) => {

  return (
    <NavLink to={`/dashboard/${url}`} className='sidebar-link' activeClassName='active'>
      <img src={icon} className='sidebar-link-icon' />
      <span className='sidebar-link-text'>
        {title}
      </span>
    </NavLink>
  )
}

export default SidebarLink;