import React,{useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {TODOS} from '../utils/data';
import {TodoList} from '../Components/TodoList';

function CompleteContent(){
    const [todoList, setTodoList] = useState(TODOS.filter(function(item){return(item.status==='Done')}));
    const onDeleteTodo = id => {
      const newTodoList = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodoList);
    };
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignContent:'center',
            alignItems:'center'
        }}>
        <View style={styles.todoContainer}>
            <Text style={styles.labelList}>TODO LIST ({todoList.length})</Text>
            <TodoList 
            todoList={todoList}
            onToggleTodo={()=>null}
            onDeleteTodo={onDeleteTodo}
            />
        </View>
        </View>
    )
}

const Stack = createStackNavigator();

export default function Complete(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='CompleteContent' component={CompleteContent} 
                options={{
                    headerTitle:()=><Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>Complete</Text>,
                }}
            />
        </Stack.Navigator>
    )
}

const styles=StyleSheet.create({
    todoContainer:{
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
        backgroundColor:'#fff',
        margin:20,
        padding:10,
        elevation:3

      },
      labelList:{
        fontSize:25,
        textAlign:"center",
        fontWeight:'bold',
        margin:20
      },
});