import React from 'react';
import { createStackNavigator, createAppContainer, } from 'react-navigation';

import Home from './../pages/HomePage';
import Camera from './../pages/Camera';

export default createAppContainer(Routes);

const Routes = createStackNavigator({
    Home,
    Camera
})