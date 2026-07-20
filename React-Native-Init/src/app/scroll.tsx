import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Homescreen = () => {

    const items = Array.from({length:20}, (_, i)=> `Item ${i +1}`)
  return (
    <ScrollView
    style={{flex:1,backgroundColor:"red"}} contentContainerStyle={{
        padding:16, alignItems:'center'
    }}
    >
      {items.map((item)=>(
         <Text>{item}</Text>
      ))} 
    </ScrollView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})