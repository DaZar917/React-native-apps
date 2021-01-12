import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './src/screens/drawer/DrawerContent'
import HomeScreen from './src/screens/main/HomeScreen'
import ShopsScreen from './src/screens/main/ShopsScreen'
import LibrariesScreen from './src/screens/main/LibrariesScreen'
import LibraryInfoScreen from './src/screens/info/LibraryInfoScreen'
import ShopInfoScreen from './src/screens/info/ShopInfoScreen'
import BookInfoScreen from './src/screens/info/BookInfoScreen';
import MapScreen from './src/screens/main/MapScreen';
import BooksScreen from './src/screens/main/BooksScreen';
import EntityMapScreen from './src/screens/main/EntityMapScreen'
import { LogBox } from 'react-native';
import SettingsScreen from './src/screens/main/SettingsScreen';
const AppBackgroundColor = '#3BBD1C'
LogBox.ignoreLogs(['Require cycle:'])
LogBox.ignoreLogs(['VirtualizedLists should'])
const Drawer = createDrawerNavigator();
const locations = [{
  id: 1,
  title: '',
  location: '',
  icon: '',
  uri: '',
  workHours: {
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
  },
  phonenumber: '',
  email: '',
  rating: 0,
  website: "",
  coordinates: {
    latitude: 0,
    longitude: 0,
  }
}]


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>

        <Drawer.Screen name="Home" component={HomeScreen} initialParams={{ color: '#3BBD10' }} />
        <Drawer.Screen name="Shops" component={ShopsScreen} />
        <Drawer.Screen name="Libraries" component={LibrariesScreen} />
        <Drawer.Screen name="Map" component={MapScreen} initialParams={{ locations: locations }} />
        <Drawer.Screen name="EntityMap" component={EntityMapScreen} />
        <Drawer.Screen name="Books" component={BooksScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />

        <Drawer.Screen name="ShopInfo" component={ShopInfoScreen} />
        <Drawer.Screen name="LibraryInfo" component={LibraryInfoScreen} />
        <Drawer.Screen name="BookInfo" component={BookInfoScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


export default App;
