import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile210993Navigator from '../features/UserProfile210993/navigator';
import Tutorial210992Navigator from '../features/Tutorial210992/navigator';
import NotificationList210964Navigator from '../features/NotificationList210964/navigator';
import Settings210963Navigator from '../features/Settings210963/navigator';
import Settings210955Navigator from '../features/Settings210955/navigator';
import UserProfile210953Navigator from '../features/UserProfile210953/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile210993: { screen: UserProfile210993Navigator },
Tutorial210992: { screen: Tutorial210992Navigator },
NotificationList210964: { screen: NotificationList210964Navigator },
Settings210963: { screen: Settings210963Navigator },
Settings210955: { screen: Settings210955Navigator },
UserProfile210953: { screen: UserProfile210953Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
