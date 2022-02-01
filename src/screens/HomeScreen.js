import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, TouchableWithoutFeedback, Text } from 'react-native'

import SearchText from '../components/SearchText'
import DataList from '../components/DataList'

const HomeScreen = () => {
    const spatype = [
        {id: "", title: 'Бүх газар'},
        {id: "1", title: 'Дархан цаазат газар'},
        {id: "2", title: 'Байгалийн цогцолборт газар'},
        {id: "3", title: 'Байгалийн нөөц газар'},
        {id: "4", title: 'Дурсгалт  газар'}
    ];
    
    const renderItem = ({ item }) => (
        <View>
            <TouchableWithoutFeedback onPress={()=>setLocalSearchType(`${item.id}`)}> 
                <Text style = {styles.searchButton}>
                    {item.title}
                </Text>
            </TouchableWithoutFeedback >
        </View>
    );

    const [localTypeText, setLocalSearchType] = useState("");
    const [localSearchText, setLocalSearchText ] = useState("")
    const searchDataFromLocal = () => {
        //console.log('Мэдээллийг хайж байна...')
    }

    return (
        <SafeAreaView style={styles.container1}>
            <View style={styles.container2}>
                <SearchText value={localSearchText} onValueChange={setLocalSearchText} onFinishEnter={searchDataFromLocal} />
                <View style={styles.searchPanel}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={spatype => spatype.id}
                        data={spatype}
                        renderItem={renderItem}
                    />
                </View>
            </View>
            <View style={styles.container3}>
                <DataList searchTextValue={localSearchText} searchTypeValue={localTypeText} />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    container2: {
        marginLeft: 10,
        marginRight: 5,
        marginTop: 5,
    },
    container3: {
        marginLeft: 10,
        marginBottom: 10,
    },
    searchPanel: {
        flexDirection: 'row',
    },
    searchButton: {
        height: 40,
        textAlign: 'center',
        backgroundColor: '#16A085',
        color: 'white',
        padding: 10,
        marginRight: 5,
        marginTop: 5,
    },
})
