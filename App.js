import HomeScreen from "./src/screens/HomeScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListTask from "./src/screens/ListTask";
import {SafeAreaProvider} from "react-native-safe-area-context";
import NewTask from "./src/screens/NewTask";
import TodoContext from "./src/utils/TodoContext";
import EditTask from "./src/screens/EditTask";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <TodoContext>
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
                        <Stack.Screen name='EditTask' component={EditTask} options={
                            {
                                headerShown: false
                            }
                        }/>
                    </Stack.Navigator>
                </SafeAreaProvider>
            </NavigationContainer>
        </TodoContext>
    );
}


