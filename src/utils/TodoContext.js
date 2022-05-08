import {createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext(null)

function TodoContext({children}) {
    const [task, setTask] = useState([])
//fetch task form local storage
    useEffect(() => {
        fetchFromStorage()
    }, [])
    // store new task
    useEffect(() => {
        storeNewTask()
    }, [task])
    const storeNewTask = async () => {
        try {
            await AsyncStorage.setItem('task', JSON.stringify(task))

        } catch (e) {
            console.log(e)
        }
    }

    const fetchFromStorage = async () => {
        try {
            const value = await AsyncStorage.getItem('task')
            if (value != null) {
                setTask(JSON.parse(value))
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <TaskContext.Provider value={{
            task,
            setTask,
            fetchFromStorage
        }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TodoContext;
