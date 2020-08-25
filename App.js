import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import React from 'react';
import { Provider } from './src/context/BlogContext';

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Home Page'
  }
});
const App = createAppContainer(navigator);

//========= App is wrapped around BLOG PROVIDER so that any child components can be accessed through the app =========
export default () => {
  return <Provider>
    <App />
  </Provider>
}