import History from './components/History'
import Home from './components/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native';
import {useState} from "react"

const Stack=createNativeStackNavigator();

const App = () => {

  return (
   
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen name="Home" component={Home} option={{title:'Welcome'}}></Stack.Screen>
             <Stack.Screen name='History' component={History} option={{title:'History'}}></Stack.Screen>
         </Stack.Navigator>
       </NavigationContainer>
   
  
  
  )
}

export default App
