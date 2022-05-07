import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListTask from "./src/screens/ListTask";
import {SafeAreaProvider} from "react-native-safe-area-context";
import NewTask from "./src/screens/NewTask";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <SafeAreaProvider>
                <Stack.Navigator>
                    <Stack.Screen name='HomeScreen' component={HomeScreen}
                                  options={
                                      {headerShown: false}
                                  }
                    />
                    <Stack.Screen name='ListTask' component={ListTask}
                                  options={{headerShown: false}}/>
                    <Stack.Screen name='NewTask' component={NewTask} options={
                        {
                            headerShown: false
                        }
                    }/>
                </Stack.Navigator>
            </SafeAreaProvider>
        </NavigationContainer>
    );
}


