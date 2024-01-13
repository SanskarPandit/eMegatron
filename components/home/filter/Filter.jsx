import React from 'react'
import { Text, View, Button } from 'react-native'

const Filter = ({ navigation }) => {
    return (
        <View>
            <Button onPress={() => navigation.navigate("Home")} title='Go back' />
        </View>
    )
}

export default Filter