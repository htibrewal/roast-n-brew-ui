import React, { useState } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import PrivateRoutes from '../../routers/PrivateRoutes';
import ShareFeedback from '../share-feedback/share-feedback';
import About from './about';
import UserInfoCard from './user-info-card';


const Profile = () => {
  const { path } = useRouteMatch();

  const [profileData, setProfileData] = useState<any>({
    id: 9,
    email_id: "naruto@leafmail.com",
    first_name: "Akhil",
    last_name: "Krishnan",
    image_url: "https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z",
    designation: "Principal Product Designer ",
    location: "Bangalore, Karnataka",
    bio: "Principal Product Designer. Articulating the Why and How behind everyday things. Judge a book by it’s Cover",
    can_talk_about: [
      "Design",
      "Gadgets",
      "Movies"
    ],
    cannot_talk_about: [
      "Shiv",
      "Documentary"
    ],
    coins_balance: 4372,
    card_counts: {
      "HONESTY": 1,
      "BEST_AT_WHAT_YOU_DO": 1
    }
  });


  //
  // useEffect( () => {
  //   // (async function() {
  //   //   const data = await NetworkRequest('GET', '/users/9', {});
  //   //   setProfileData(data);
  //   // })();
  //
  //   fetch('/users/9', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then((body) => setProfileData(body.data));
  // }, []);

  return (
    <>
      <UserInfoCard data={profileData} />

      <div className='user-info-links'>
        <NavLink to={`${path}/about`} className='user-info-link' activeClassName='active'>
          About
        </NavLink>

        <NavLink to={`${path}/received`} className='user-info-link' activeClassName='active'>
          Received
        </NavLink>

        <NavLink to={`${path}/given`} className='user-info-link' activeClassName='active'>
          Given
        </NavLink>
      </div>

      <Switch>
        <PrivateRoutes
          path={`${path}/about`}
          component={<About {...profileData} />}
        />

        <PrivateRoutes
          path={`${path}/received`}
          component={ShareFeedback}
        />

        <PrivateRoutes
          path={`${path}/given`}
          component={ShareFeedback}
        />

        <Route render={() => <Redirect to={`${path}/about`} />} />
      </Switch>
    </>
  )
}

export default Profile;