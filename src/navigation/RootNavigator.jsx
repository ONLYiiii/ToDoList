import 'react-native-gesture-handler';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StackNavigationData from './stackNavigationData';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'transparent' },
      }}
    >
    {StackNavigationData.map((item) => (
      <Stack.Screen
        key={item.id}
        name={item.name} 
        component={item.component} 
        options={{
          headerLeft: item.headerLeft,
          headerShown: item.headerShown,
        }} 
      />
    ))}
    </Stack.Navigator>
  );
}
