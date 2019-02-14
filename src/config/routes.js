import React from 'react';
import { createStackNavigator, createAppContainer, } from 'react-navigation';

import Home from './../pages/HomePage';
import Camera from './../pages/Camera';

const Routes = createStackNavigator({
    Home: Home,
    Camera: Camera
},
{
    headerMode: 'none'
})

export default createAppContainer(Routes);
