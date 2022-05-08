import {Alert, Image, Pressable, Text, TextInput, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from "@react-navigation/native";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


function HomeScreen() {
    const navigation = useNavigation()
    const [input, setInput] = useState('')

    async function storeData() {
        try {
            await AsyncStorage.setItem('userName', input)
            if (input !== '') {
                navigation.navigate('ListTask', {name: input})
            } else {
                Alert.alert('warning', 'write your name please')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <KeyboardAwareScrollView enableOnAndroid>
            <View
                style={[tw` w-full h-full items-center pt-12 px-12 `]}>
                <Image style={[{width: 300, height: 300}, tw`mt-20`]} source={require('../assets/todo.png')}/>
                <Text style={tw`mt-4 text-4xl font-bold tracking-widest`}>Welcome</Text>
                <Text style={tw`mt-4 text-base tracking-wider`}>Can you type your name for me?</Text>

                <TextInput
                    style={tw` mt-8 h-10 text-lg tracking-wide w-full text-black border-b-2 border-blue-300`}
                    onChangeText={(text) => setInput(text)}
                    value={input}
                    placeholder="Your name..."
                />
                <Pressable style={tw`mt-16 bg-blue-400 px-6 py-3 rounded-full`}
                           onPress={storeData}>
                    <Text style={tw`text-lg tracking-wide font-semibold text-blue-900  `}>Let's start</Text>
                </Pressable>

            </View>
        </KeyboardAwareScrollView>
    );

}

export default HomeScreen;
