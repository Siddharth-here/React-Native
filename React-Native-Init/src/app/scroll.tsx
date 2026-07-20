import { Button, ScrollView, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'

const Homescreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

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

      <Button
      title='Hello'
      color={"green"}
      onPress={()=> alert("hello im a button")}
      />

      <Switch
      value={isDarkMode}
      onValueChange={setIsDarkMode}
      trackColor={{false:"#ddd", true:"#6c63ff"}}
      />
    </ScrollView>
  )
}

export default Homescreen

const styles = StyleSheet.create({})