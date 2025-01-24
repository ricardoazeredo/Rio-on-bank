import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { Conta } from '../screens/Conta';

export function AppRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen 
                name='home'
                component={Home}
            />
            <Screen 
                name='conta'
                component={Conta}
            />
        </Navigator>
    )
}