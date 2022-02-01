import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import { Feather } from "@expo/vector-icons"

const SearchText = ({ value, onValueChange, onFinishEnter }) => {
    const navigation =useNavigation();
    return (
        <View style={styles.searchPanel}>
            <Feather style={styles.searchIcon} name="search" />
            <TextInput value={value} onChangeText={onValueChange} style={styles.searchText} placeholder="ТХГН-ийн нэрээр хайх" placeholderTextColor="#a6a6a6" autoCapitalize="none" autoCorrect={false} onEndEditing={onFinishEnter} />
        </View>
    )
}

export default SearchText

const styles = StyleSheet.create({
    searchPanel: {
        height: 40,
        paddingLeft: 10, 
        paddingRight: 10, 
        flexDirection: 'row',
        backgroundColor: '#CCCCCC',
    },
    searchText: {
        flex: 1,
        marginHorizontal: 10,
        color: '#000000',
        fontSize: 16,
    },
    searchIcon: {
        alignSelf: 'center',
        fontSize: 20,
        color: "#a6a6a6",
    },
})
