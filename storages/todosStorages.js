import AsyncStorage from '@react-native-community/async-storage';

const key = 'todos';
const todosStorages = {
  async get() {
    try {
      const rawTodos = await AsyncStorage.getItem('todos');

      if (!rawTodos) {
        throw new Error('no saved todos');
      }
      const savedTodos = JSON.parse(rawTodos);
      return savedTodos;
    } catch (e) {
      console.log(e);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  },
};

export default todosStorages;
