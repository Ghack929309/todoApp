import {SafeAreaView, Text, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";

function HeaderTask() {
    const navigation = useNavigation()
    const [name, setName] = useState()
    useEffect(() => {
        getStoreData()
    }, [])
    const getStoreData = async () => {
        try {
            const data = await AsyncStorage.getItem('userName')
            if (data != null || undefined) {
                return setName(data)
            }
            navigation.navigate('HomeScreen')
        } catch (error) {
            console.log(error)
        }
    }
    const clearAll = async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
            console.log(e)
        }

        console.log('Done.')
    }
    return (
        <SafeAreaView>
            <View style={tw`flex-row justify-between items-center`}>
                <View style={tw`flex`}>
                    <Text style={tw`text-2xl tracking-wide font-semibold`}>
                        Hey, {name}
                    </Text>
                    <Text style={tw`mt-2 text-gray-500`}>You have <Text style={tw`text-blue-900`}>7 task</Text> to
                        complete</Text>

                </View>
                <Icon size={30} onPress={clearAll} color='blue' name='user' type='antdesign'/>
            </View>
        </SafeAreaView>
    );
}

export default HeaderTask;
