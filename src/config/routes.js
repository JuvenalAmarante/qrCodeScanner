import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Home from './../pages/HomePage';
import Camera from './../pages/Camera';

const Routes = createSwitchNavigator(
  {
    Home: Home,
    Camera: Camera,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  },
);

export default createAppContainer(Routes);
