import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import tw from "tailwind-react-native-classnames";
import {useContext, useEffect, useState} from "react";
import DataLayout from "./DataLayout";
import {TaskContext} from "../utils/TodoContext";

function ListData() {
    const [term, setTerm] = useState('All')
    const {task} = useContext(TaskContext);
    const headerData = ['All', 'Completed', 'Not Completed']
    console.log(task)
    return (
        <View style={[tw`mt-6 flex-1 mb-8`]}>
            <View>

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
            </View>
            <View style={[tw`mt-8`]}>
                {task.length === 0 ? (
                    <Text style={tw`text-2xl text-gray-500 text-center mt-16`}>No Task</Text>
                ) : (
                    <DataLayout term={term} data={task}/>

                )}
            </View>
        </View>
    );
}


export default ListData;
