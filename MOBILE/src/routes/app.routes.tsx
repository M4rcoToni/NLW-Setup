import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

<<<<<<< HEAD
import { Home } from '../screens/Home';
=======
import { Habit } from '../screens/Habit';
import { Home } from '../screens/home';
>>>>>>> a7c9fa07665d5f1e206ecb80091c60a9865a6858
import { New } from '../screens/New';
import { Habit } from '../screens/Habit';

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="new"
        component={New}
      />

      <Screen
        name="habit"
        component={Habit}
      />
    </Navigator>
  )
}