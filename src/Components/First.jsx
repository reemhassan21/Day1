import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'; 
import { useState } from 'react';
export default function First() {
  const [text,setText]= useState('hello')

  return (
    <View>
        <Text style={{marginTop:50, marginLeft:10}}>{text}</Text> 
      
      <TextInput style={{margin:10}} placeholder="Empty space" value={text} onChangeText={(e)=>{setText(e)}}/>
      <View style={{width:200, margin:10, borderRadius:15}}>
        <Button color='green' title="Change" onPress={(e)=>{ setText('This is update from change button')}}/>
      </View>
      <View style={{width:200, margin:10, borderRadius:15}}>
        <Button color='red' title="Clear" onPress={(e)=>{ setText(' ')}}/> 
      </View>
    </View>
    
  )
}
