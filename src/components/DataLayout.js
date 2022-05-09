import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View
} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";
import {SwipeListView} from 'react-native-swipe-list-view'
import {TaskContext} from "../utils/TodoContext";
import {useContext} from "react";
import {Ionicons} from '@expo/vector-icons';


const HiddenItem = ({data, onCompleted, onDeleted}) => {

    return (
        <View style={tw` flex-row justify-end items-end `}>
            <View
                style={[tw`flex-row items-center justify-center`, {
                    width: '38%',
                    height: 85,
                }]}>
                <TouchableHighlight
                    style={[tw`bg-blue-200 flex-1 h-full items-center justify-center rounded-2xl mr-2`]}
                    onPress={onCompleted}>
                    <Text>{data.item.completed ? 'Undo' : 'Done'}</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={tw`flex-1 h-full bg-red-200 items-center justify-center rounded-2xl`}
                    onPress={onDeleted}>
                    <Text>Delete</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const VisibleItem = ({item}) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            style={[tw`bg-white rounded-xl flex-row
                          justify-between items-center py-3 px-2 mb-4`, styles.container]}
            onPress={() => navigation.navigate('EditTask', {id: item.key})}
        >
            <View
                style={[{width: '90%'}]}>
                <Text
                    style={tw`text-blue-900 font-semibold text-lg tracking-tight`}>{item?.title}
                </Text>
                <View
                    style={tw``}>
                    <Text
                        style={tw`text-gray-600 `}>{item?.date}
                    </Text>
                    <Text
                        style={tw`text-gray-600 `}>{item?.time}
                    </Text>
                </View>

            </View>
            {
                item.completed ? (
                    <Ionicons style={tw`p-2`} name="checkmark-done-circle"
                              size={35} color="green"/>
                ) : (
                    <Icon
                        style={tw`p-2`}
                        name='reload1'
                        color='blue'
                        type='antdesign'/>
                )
            }


        </TouchableOpacity>
    )
}

function DataLayout({term, data}) {
    const {setTask} = useContext(TaskContext);
    const completed = data?.filter(item => item?.completed === true);
    const unCompleted = data?.filter(item => item?.completed === false);

    const filterData = term === 'Completed' ? completed : unCompleted;

    const closeRow = (rowMap, rowKey) => {
        if (rowMap[rowKey]) {
            rowMap[rowKey].closeRow();
        }

    }
    const taskCompleted = (rowMap, key) => {
        const mock = [...data]
        mock.filter(task => {
            if (task.key === key) {
                task.completed = !task.completed
            }
        })
        setTask(mock)
        closeRow(rowMap, key)
    }


    const onDeleted = (rowMap, key) => {
        closeRow(rowMap, key);
        const mockData = [...data];
        const prevIndex = mockData.findIndex(item => item.key === key);
        mockData.splice(prevIndex, 1);
        setTask(mockData);
    }

    return (
        <SwipeListView
            data={term === 'All' ? data : filterData}
            renderItem={({item}) => (
                <VisibleItem
                    item={item}
                />
            )}
            renderHiddenItem={(data, rowMap) => (
                <HiddenItem data={data}
                            rowMap={rowMap}
                            onCompleted={() => taskCompleted(rowMap, data.item.key)}
                            onDeleted={() => onDeleted(rowMap, data.item.key)}
                />
            )}
            leftOpenValue={75}
            rightOpenValue={-150}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: {
            width: 5,
            height: 5
        },
        elevation: 3,
        shadowOpacity: 0.1,
    }
})

export default DataLayout;
