import React,{useState} from 'react';
import {View,Text,StyleSheet,TouchableOpacity,FlatList,Alert,TextInput,ScrollView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {useRoute, useNavigation,CommonActions} from '@react-navigation/native';

import {TODOS} from '../utils/data';
import {TodoList} from '../Components/TodoList';
import Complete from './CompleteScreen';
import Active from './ActiveScreen';

export function AllContent(){
    const [todoList, setTodoList] = useState(TODOS);
    const [todoBody, setTodoBody] = useState('');
    const navigation = useNavigation();
    const onToggleTodo = i => {
        const todo = todoList.find(todo => (todo === todoList[todoList.indexOf(i)]));
        todo.status = todo.status === 'Done' ? 'Active' : 'Done';//update status
        const foundIndex = todoList.findIndex(todo => todo === todoList[todoList.indexOf(i)]);
        todoList[foundIndex] = todo;//update item
        const newTodoList = [...todoList];
        setTodoList(newTodoList);
        navigation.navigate('SingleTodoScreen',{todoId:(todoList.indexOf(todo)+1),todoStatus:todo.status,todoBody:todo.body})
      };
    const onDeleteTodo = i => {
      const newTodoList = todoList.filter(todo => (todo !== todoList[todoList.indexOf(i)]));
      setTodoList(newTodoList);
    };
    const onSubmitTodo = () => {
        const newTodo = {
          body: todoBody,
          status: 'Active',
          id: todoList.length + 1
        };
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
        setTodoBody('');
      };

    return(
    <ScrollView style={styles.container} >
      <View style={styles.todoContainer}>
        <Text style={styles.labelList}>TODO LIST ({todoList.length})</Text>
        <TodoList 
          todoList={todoList}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          />
        </View>
        
        <View style={styles.inputContainer}>
        <TextInput
            value={todoBody}
            style={styles.todoInput}
            onChangeText={text => setTodoBody(text)}
            placeholder='Input task in here...'
        />
        <TouchableOpacity style={styles.button} onPress={onSubmitTodo}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
        
      </ScrollView>
    )
}

function SingleTodoScreen(){
  const route=useRoute();
  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',

  }}>
      <Text style={{
            fontSize:30,
            textAlign:'center'
        }}>
          {route.params?.todoId}. {route.params?.todoStatus}
          </Text>
           <Text style={{
            fontSize:40,
            textAlign:'center'
        }}>
          {route.params?.todoBody}
          </Text>
      
  </View>
  )
}

const Stack = createStackNavigator();

export default function All(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='AllContent' 
        component={AllContent}
        options={{
          headerTitle:'',
          headerStyle:{height:0}
        }}
      />

      <Stack.Screen 
        name='SingleTodoScreen' 
        component={SingleTodoScreen}
        options={{
          headerTitle:()=><Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>Single Todo Screen</Text>,
        }}
      />
    </Stack.Navigator>
  )
}


const styles=StyleSheet.create({
    container: {
        backgroundColor:'#b5b5b5'
      },
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
      todoInput: {
        width: '95%',
        minHeight: 50,
        color: '#000',
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        paddingLeft:20,
        borderWidth: 1,
        margin:10,
        borderColor: 'grey',
        backgroundColor:'#fff',
        borderRadius:25,
        elevation:3
      },
      inputContainer: {
        flex: 1,
        margin:10,
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        height: 50,
        width: '50%',
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: 'blue',
        justifyContent: 'center'
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:20,
      }
    });