import React from 'react'
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Linking, Button, Image, Dimensions} from 'react-native'

import useDataDetail from '../hooks/useDataDetail'
import useBoundaryDetail from '../hooks/useBoundaryDetail'

const DetailScreen = props => {
    const { dataid } = props.route.params
    const [ datadetail, errorMessage1 ] = useDataDetail(dataid)
    const [ boundarydetail, errorMessage2 ] = useBoundaryDetail(dataid)

    {errorMessage1 && (<Text style={styles.errorText}> {errorMessage1} </Text>)}
    {errorMessage2 && (<Text style={styles.errorText}> {errorMessage2} </Text>)}

    if(!datadetail) { return null }
    if(!boundarydetail) { return null }

    function checkElement(val) {
        if(!val) { return 'Үгүй' }
        if(val.toLowerCase().includes('t')) { return 'Тийм' } else { return 'Үгүй'}
    }

    const Separator = () => (
        <View style={styles.separator} />
    );

    const renderItem = ({ item }) => (
        <View>
             <Text style={styles.itemText3}>{item.species_name}</Text>
        </View>
    );
    
    return (
        <SafeAreaView style={styles.container1}>
            {datadetail.map(el => (
            <ScrollView key={el.species_id} style={styles.container2}>
                <Text style={styles.titleText1}>{el.species_name_mn}</Text>
                <Text style={styles.titleText2}>{el.species_name_ru}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={boundary => boundary.gid}
                    data={boundarydetail}
                    renderItem={renderItem}
                />
                <Text style={styles.itemText1}>Хамгаалалтанд авсан огноо:</Text>
                <Text style={styles.itemText2}>{el.species_name_mn}</Text>
                <Separator />
            </ScrollView>
            ))}
        </SafeAreaView>
    )
}

export default DetailScreen

const styles = StyleSheet.create({
    container1: {
        flex: 1
    },
    container2: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
    },
    errorText: {
        margin: 10,
        fontWeight: 'bold',
        color: 'red'
    },
    titleText1: {
        paddingTop: 10,
        fontWeight: 'bold',
        fontStyle: 'italic',
        alignSelf: 'center',
        fontSize: 16,
        color: "#266D9F",
    },
    titleText2: {
        fontStyle: 'italic',
        alignSelf: 'center',
        color: "#266D9F",
        paddingBottom: 10,
    },
    itemText1: {
        fontWeight: 'bold',
    },
    itemText2: {
        textAlign: 'justify', 
        paddingBottom: 5,
    },
    itemText3: {
        textAlign: 'center',
        paddingBottom: 5,
    },
    itemImage: {
        width: Dimensions.get('window').width,
        height: 200,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    separator: {
        marginVertical: 10,
    },
})
