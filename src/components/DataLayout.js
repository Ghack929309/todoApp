import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {Icon} from "@rneui/base";
import {useEffect, useState} from "react";

function DataLayout({term, data}) {
    const [completed, setCompleted] = useState()
    const [unCompleted, setUnCompleted] = useState()


    useEffect(() => {
        setCompleted(data.filter(item => item.completed === true));
        setUnCompleted(data.filter(item => item.completed === false));
    }, [term]);

    const filterData = term === 'Completed' ? completed : unCompleted;
    return (
        <FlatList data={term === 'All' ? data : filterData}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                      <TouchableOpacity style={[tw`bg-white rounded-xl flex-row
                          justify-between items-center py-3 px-2 mb-4`, styles.container]}>
                          <View>
                              <Text
                                  style={tw`text-blue-900 font-semibold text-lg tracking-tight`}>{item?.title}</Text>
                              <Text
                                  style={tw`text-gray-600 `}>{item?.time}
                              </Text>
                          </View>

                          <Icon name='reload1' color='blue' type='antdesign'/>
                      </TouchableOpacity>

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
