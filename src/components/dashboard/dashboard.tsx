import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PrivateRoutes from '../../routers/PrivateRoutes';
import Feed from '../feed/feed';
import HeaderBg from '../header-bg';
import Marketplace from '../marketplace/marketplace';
import Profile from '../profile/profile';
import RequestFeedback from '../request-feedback/request-feedback';
import ShareFeedback from '../share-feedback/share-feedback';
import Header from './header/header';
import Sidebar from './sidebar';

const Dashboard = () => {
  const path = '/dashboard';

  return (
    <div className="dashboard-container">
      <Header />
      <Sidebar />

      <div className="app-body">
        <HeaderBg />

        <div className="main-content-wrapper">
          <Switch>
            <PrivateRoutes
              path={`${path}/feed`}
              component={Feed}
            />

            <PrivateRoutes
              path={`${path}/share-feedback`}
              component={ShareFeedback}
            />

            <PrivateRoutes
              path={`${path}/request-feedback`}
              component={RequestFeedback}
            />

            <PrivateRoutes
              path={`${path}/marketplace`}
              component={Marketplace}
            />

            <PrivateRoutes
              path={`${path}/profile`}
              component={Profile}
            />

            <Route render={() => <Redirect to='/dashboard/feed' />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;