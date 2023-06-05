import react from "react";
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import { Home} from '../screens'
//other styles
import NavigationStrings from "../../res/strings/NavigationStrings";

const Stack = createStackNavigator()
function Stacks() {

    const fadeInAnimation = {
        cardStyleInterpolator: ({ current }) => {
          return {
            cardStyle: {
              opacity: current.progress,
            },
          };
        },
      };

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={NavigationStrings.home} component={Home} options={fadeInAnimation} />
           {/* other screens here */}
        </Stack.Navigator>
    )
}

export default function StackNavigation() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    )
}