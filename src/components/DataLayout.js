import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {Icon} from "@rneui/base";
import {useNavigation} from "@react-navigation/native";

function DataLayout({term, data}) {
    const navigation = useNavigation()
    const completed = data?.filter(item => item?.completed === true);
    const unCompleted = data?.filter(item => item?.completed === false);

    const filterData = term === 'Completed' ? completed : unCompleted;
    return (

        <FlatList data={term === 'All' ? data : filterData}
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  renderItem={({item}) => (
                      <TouchableOpacity style={[tw`bg-white rounded-xl flex-row
                          justify-between items-center py-3 px-2 mb-4`, styles.container]}
                                        onPress={() => navigation.navigate('EditTask', {id: item.id})}
                      >
                          <View>
                              <Text
                                  style={tw`text-blue-900 font-semibold text-lg tracking-tight`}>{item?.title}</Text>
                              <View style={tw``}>
                                  <Text
                                      style={tw`text-gray-600 `}>{item?.date}
                                  </Text>
                                  <Text
                                      style={tw`text-gray-600 `}>{item?.time}
                                  </Text>
                              </View>

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
