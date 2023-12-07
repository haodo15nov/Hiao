//---------------------------------------------------- REACT_NOR ----------------------------------------------------//

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import scr1 from "./NOR/scr1"
import scr2 from "./NOR/scr2"
import scr3 from "./NOR/scr3"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="scr1" screenOptions={{ headerShown: false }}>
        <Stack.Screen component={scr1} name="first" />
        <Stack.Screen component={scr2} name="second" />
        <Stack.Screen component={scr3} name="third" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


 

//---------------------------------------------------- REACT_REDUX ----------------------------------------------------//

// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from 'react-redux';
// import YourComponent from './REDUX/Screen/scr1'; // Adjust the import based on your file structure
// import store from './REDUX/Store/store'; // Adjust the import based on your file structure
// import scr1 from './REDUX/Screen/scr1';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="scr1">
//           <Stack.Screen name="sc1" component={scr1} />
//           {/* Add other screens as needed */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;
