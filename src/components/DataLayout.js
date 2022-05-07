import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {Icon} from "@rneui/base";

function DataLayout({term, data}) {
    const select = data.filter(item => item.name === term)

    return (
        <FlatList data={select}
                  keyExtractor={(item, index) => item.title + index}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                      item.task.map(task => (
                          <TouchableOpacity style={[tw`bg-white rounded-xl flex-row 
                              justify-between items-center py-3 px-2 mb-4`, styles.container]}>
                              <View>
                                  <Text
                                      style={tw`text-blue-900 font-semibold text-lg tracking-tight`}>{task?.title}</Text>
                                  <Text
                                      style={tw`text-gray-600 `}>{task?.time}</Text>
                              </View>

                              <Icon name='reload1' color='blue' type='antdesign'/>
                          </TouchableOpacity>
                      ))
                  )}/>

    );
}

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: {width: 5, height: 5},
        elevation: 3,
        shadowOpacity: 0.1,
    }
})

export default DataLayout;
