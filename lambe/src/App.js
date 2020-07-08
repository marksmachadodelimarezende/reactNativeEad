import React from 'react';
import Header from './components/Header'
import { View, Text } from 'react-native'
import Post from './components/Post'

const App: () => React$Node = () => {
  const comments = [
    {nickname: 'Marks', comment: 'Excelente trabalho' },
    {nickname: 'Lobó', comment: 'Excelente foto' },
  ]
  return (
    <View style={{ flex: 1}}>
      <Header />
      <Post image={require('../assets/imgs/fence.jpg')} comments={comments}/>
    </View>

  );
};
export default App;
