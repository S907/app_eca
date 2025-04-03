import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Scheduler from './components/Scheduler';

const App=()=> {
  return (
    <View style={{flex:1,justifyContent:'center', }}>
      <Text>App</Text>
      <Scheduler />
    </View>
  )
}
export default App;
const styles = StyleSheet.create({})