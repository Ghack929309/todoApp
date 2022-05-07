import {Pressable, Text, View} from 'react-native';
import HeaderTask from "../components/HeaderTask";
import ListData from "../components/ListData";
import tw from "tailwind-react-native-classnames";
import {Icon} from "@rneui/base";
import {useNavigation, useRoute} from "@react-navigation/native";

function ListTask() {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View style={tw`px-4 h-full relative`}>
            <HeaderTask data={route.params}/>
            <ListData/>
            <Pressable
                style={tw`flex-row items-center bg-blue-400 px-4 py-3 rounded-full absolute inset-x-24 bottom-12`}
                onPress={() => navigation.navigate('NewTask')}>
                <Icon name='plus' style={tw`w-6 h-6 mr-3`} color='white' type='antdesign'/>
                <Text style={tw`text-lg tracking-wide font-semibold text-blue-900  `}>Add a new task</Text>
            </Pressable>
        </View>
    );

}

export default ListTask;
