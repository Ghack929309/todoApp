import {KeyboardAvoidingView, Pressable, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Icon} from "@rneui/base";
import tw from "tailwind-react-native-classnames";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";
import {useState} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';

function NewTask() {
    const navigation = useNavigation()
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [displayText, setDisplayText] = useState('')

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        let tempDate = new Date(currentDate)
        let formatDate = `${tempDate.getDate()}/${tempDate.getMonth() + 1}/${tempDate.getFullYear()}`
        let formatTime = `${tempDate.getHours()}:${tempDate.getMinutes()} ${tempDate.getHours() >= 12 ? 'PM' : 'AM'}`
        setDisplayText(formatDate + '\n' + formatTime)
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };
    return (
        <View>
            <View style={tw`bg-blue-400 pt-12 flex-row px-3 pb-8 items-center`}>
                <TouchableOpacity onPress={() => navigation.navigate('ListTask')}>
                    <Icon name='close' style={tw`w-6 h-6 mr-8`} color='white' type='antdesign'/>
                </TouchableOpacity>
                <Text style={tw`text-2xl text-white font-semibold tracking-wide`}>Add task</Text>

            </View>
            <KeyboardAvoidingView
                behavior='height'
                style={tw`justify-between -mt-4 rounded-3xl py-6 px-3`}>
                <View style={tw`h-4/5`}>
                    <TextInput style={tw`text-2xl text-gray-600 h-16 w-full`}
                               placeholder='What would you like to add here?'/>
                    <View>
                        <Text>{displayText}</Text>
                        {show && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={mode}
                                is24Hour={true}
                                display='clock'
                                onChange={onChange}
                            />
                        )}
                    </View>

                </View>


                <View style={tw`flex-row  justify-between -mb-6 `}>

                    <View style={tw`flex-row`}>
                        <TouchableOpacity onPress={showDatepicker} style={tw`mr-5 bg-blue-400 rounded-full p-3`}>
                            <Icon name='calendar' size={35} color='white' type='antdesign'/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={showTimepicker} style={tw` bg-blue-400 rounded-full p-3`}>
                            <Ionicons name="alarm-outline" size={35} color="white"/>
                        </TouchableOpacity>
                    </View>
                    <Pressable
                        style={tw`flex-row items-center bg-blue-400 px-4 py-3 rounded-full`}>
                        <Text style={tw`text-lg tracking-wide font-semibold text-white  `}>Add task</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>

        </View>
    );
}

export default NewTask;
