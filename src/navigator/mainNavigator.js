import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile75942Navigator from '../features/UserProfile75942/navigator';
import Tutorial75941Navigator from '../features/Tutorial75941/navigator';
import NotificationList75913Navigator from '../features/NotificationList75913/navigator';
import Settings75912Navigator from '../features/Settings75912/navigator';
import Settings75904Navigator from '../features/Settings75904/navigator';
import UserProfile75902Navigator from '../features/UserProfile75902/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile75942: { screen: UserProfile75942Navigator },
Tutorial75941: { screen: Tutorial75941Navigator },
NotificationList75913: { screen: NotificationList75913Navigator },
Settings75912: { screen: Settings75912Navigator },
Settings75904: { screen: Settings75904Navigator },
UserProfile75902: { screen: UserProfile75902Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
