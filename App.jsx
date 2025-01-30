import History from './components/WatchListScreen'
import Home from './components/HomeScreen'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab=createBottomTabNavigator();

const App = () => {

  return (
   
      <NavigationContainer>
          <Tab.Navigator initialRouteName='Home'>
             <Tab.Screen name="Home" component={Home} option={{title:'Welcome'}}></Tab.Screen>
             <Tab.Screen name='History' component={History} option={{title:'History'}}></Tab.Screen>
         </Tab.Navigator>
       </NavigationContainer>
   
  
  
  )
}

export default App
