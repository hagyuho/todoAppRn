import React, {useEffect, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import AddTodo from './components/AddTodo';
import DateHead from './components/DateHead';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import todosStorages from './storages/todosStorages';

const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'abc',
      done: true,
    },
    {
      id: 2,
      text: 'efg',
      done: false,
    },
    {
      id: 3,
      text: 'hjk',
      done: false,
    },
  ]);

  useEffect(() => {
    todosStorages.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorages.set(todos).catch(console.error);
  }, [todos]);

  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    setTodos([...todos, todo]);
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodo = todos.filter(todo => todo.id !== id);
    setTodos(nextTodo);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding', android: undefined})}
          style={styles.avoid}>
          <DateHead today={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
