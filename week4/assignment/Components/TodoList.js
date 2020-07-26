import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Alert} from 'react-native';
import { TODOS } from '../utils/data';

export const TodoItem = (props) =>{
    const statusStyle = {
        backgroundColor:props.todo.status ==='Done' ?'lightblue':'#5eb84e',
    };
    const onLongPress = todo => {
        const prompt = `"${todo.body}"`;
        Alert.alert(
          'Delete your todo?',
          prompt,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel'
            },
            { text: 'OK', onPress: () => props.onDeleteTodo(todo) }
          ],
          { cancelable: true }
        );
      };
    return(
        <TouchableOpacity
            key={props.todo.body}
            style={[styles.todoItem,statusStyle]}
            onPress={()=>props.onToggleTodo(props.todo)}
            onLongPress={()=>onLongPress(props.todo)}
        >
            <Text style={styles.todoText}>
                {props.idx}:{props.todo.body}
            </Text>
        </TouchableOpacity>
    )
} 

export const TodoList = (props)=>{
  return(
    <FlatList
      data={props.todoList}
      renderItem={({item})=>
          <TodoItem 
              key={props.todoList.indexOf(item)+1}
              todo={item}
              idx={props.todoList.indexOf(item)+1}
              onToggleTodo={props.onToggleTodo}
              onDeleteTodo={props.onDeleteTodo}
          />
      }
      ItemSeparatorComponent={()=><View style={styles.container}/>}
      keyExtractor={item=>props.todoList.indexOf(item)+1}
      />
  )
}

const styles=StyleSheet.create({
    container: {
        backgroundColor:'#b5b5b5'
      },
      todoItem: {
        margin: 5,
        padding: 10,
        color: 'white',
        borderRadius: 5,
       
      },
      todoText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
})