import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {data} from '../utils/data'
import tw from "tailwind-react-native-classnames";
import {useState} from "react";
import DataLayout from "./DataLayout";

function ListData() {
    const [term, setTerm] = useState('All')
    return (
        <View style={[tw`mt-6`]}>
            <FlatList data={data}
                      horizontal
                      contentContainerStyle={{
                          flex: 1,
                          justifyContent: "flex-start",
                      }}
                      keyExtractor={(item) => item.name}
                      renderItem={({item}) => (
                          <TouchableOpacity onPress={() => setTerm(item.name)}>
                              <View>
                                  <Text
                                      style={tw`mr-6 text-xl font-semibold ${term === item.name ? 'text-blue-900' : 'text-black'}`}>{item.name}</Text>
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
