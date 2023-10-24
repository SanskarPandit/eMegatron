import {React , useState} from 'react'
import { View, Text, TouchableOpacity,TextInput,Image,FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'

const Welcome = () => {
  const router=useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text>Hi, Ronald A Martin</Text>
        <Text >Hi, Ronald A Martin</Text>

      </View>
    </View>
  )
}

export default Welcome