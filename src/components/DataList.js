import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import DataThumbnail from '../components/DataThumbnail'
import useDataList from '../hooks/useDataList'
import Spinner from '../components/Spinner'

const DataList = ({ searchTextValue, searchTypeValue }) => {

    const [floradatalist, errorMessage, loading] = useDataList()
    const filteredTypeList = floradatalist.filter(el => el.type_code.includes(searchTypeValue))
    const filteredDataList = filteredTypeList.filter(el => el.species_name.toLowerCase().includes(searchTextValue.toLowerCase()))

    return (
        <View style={styles.container}>
            {loading && <Spinner />}
            {errorMessage ? ( 
                <Text style={styles.errorText}> {errorMessage} </Text>
            ) : ( 
                <FlatList
                    removeClippedSubviews
                    data={filteredDataList}
                    renderItem={({ item }) => <DataThumbnail data={item} />} 
                    keyExtractor={item => item.species_id}
                />
            )}
        </View>
    )
}

export default DataList

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        backgroundColor: 'white',
    },
    errorText: {
        margin: 10,
        fontWeight: 'bold',
        color: 'red'
    },
})
