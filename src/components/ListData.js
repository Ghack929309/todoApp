import {FlatList, TouchableOpacity, View} from 'react-native';
import {data} from '../utils/data'
import tw from "tailwind-react-native-classnames";
import {useState} from "react";
import DataLayout from "./DataLayout";
import {Text} from "@rneui/base";

function ListData() {
    const [term, setTerm] = useState('All')
    const headerData = ['All', 'Completed', 'Not Completed']
    return (
        <View style={[tw`mt-6`]}>
            <FlatList data={headerData}
                      horizontal
                      contentContainerStyle={{
                          flex: 1,
                          justifyContent: "flex-start",
                      }}
                      keyExtractor={(item) => item}
                      renderItem={({item}) => (
                          <TouchableOpacity onPress={() => setTerm(item)}>
                              <View>
                                  <Text
                                      style={tw`mr-6 text-xl font-semibold ${term === item ? 'text-blue-900' : 'text-black'}`}
                                  >
                                      {item}
                                  </Text>
                              </View>
                          </TouchableOpacity>
                      )}/>
            <View style={[tw`mt-8 `]}>
                <DataLayout term={term} data={data}/>
            </View>
        </View>
    );
}


export default ListData;
