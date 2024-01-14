import React from 'react'
import { Text, View, Button } from 'react-native'
import styles from './Filter.style'
const Filter = ({ navigation }) => {
    return (
        <View>
            <Text>Filter Component</Text>
            <Button onPress={() => navigation.navigate("Home")} title='Go back' />
        </View>
    )
}

export default Filter