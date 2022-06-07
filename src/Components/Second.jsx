import React from 'react'
import { useState } from 'react'; 
import {View,Image, Button } from 'react-native';  

export default function Second() {
  var imgs=[
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
    require('../../assets/4.jpg'),
    require('../../assets/6.jpg'),
  ]  
  const [counter,setCount]= useState(0)
  return (
    <View>
        <Image source={imgs[counter]} style={{margin:10, width:200, height:200}} />
        <View style={{width:200, margin:10, borderRadius:15}}>
          <Button color='blue' title="Next" onPress={()=>{if(counter<4){setCount(counter+1) }}}/>
        </View>
        <View style={{width:200, margin:10, borderRadius:15}}>
          <Button color='blue' title="Prev" onPress={()=>{ if(counter>0){setCount(counter-1)}}}/> 
        </View> 
    </View>
  )
  }