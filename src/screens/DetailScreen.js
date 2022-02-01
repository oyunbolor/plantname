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
            <Image style={styles.itemImage} source={{ uri: `https://eic.mn/cgi-bin/mapserver?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetMap&FORMAT=image%2Fpng&TRANSPARENT=true&LAYERS=spadb_spaspa%2Cspadb_npspa%2Cspadb_nrspa%2Cspadb_nhmspa&MAP=%2Fvar%2Fwww%2Fhtml%2Fspa%2Fspainfo%2Fmaps%2Fspa.map&SRS=EPSG%3A32648&STYLES=&MAP_RESOLUTION=180&WIDTH=800&HEIGHT=640&BBOX=${item.xmin}%2C${item.ymin}%2C${item.xmax}%2C${item.ymax}` }} />
            <Text style={styles.itemText3}>{item.place_name}</Text>
        </View>
    );
    
    return (
        <SafeAreaView style={styles.container1}>
            {datadetail.map(el => (
            <ScrollView key={el.basic_id} style={styles.container2}>
                <Text style={styles.titleText1}>{el.spa_name}</Text>
                <Text style={styles.titleText2}>{el.type_name_mn}</Text>
                <FlatList 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={boundary => boundary.gid}
                    data={boundarydetail}
                    renderItem={renderItem}
                />
                <Text style={styles.itemText1}>Хамгаалалтанд авсан огноо:</Text>
                <Text style={styles.itemText2}>{el.taken_date}</Text>
                <Text style={styles.itemText1}>Хамгаалалтанд авсан тогтоол, шийдвэрийн дугаар:</Text>
                <Text style={styles.itemText2}>{el.taken_decree}</Text>
                <Text style={styles.itemText1}>Газарзүйн байрлал:</Text>
                <Text style={styles.itemText2}>{el.place_name}</Text>
                <Text style={styles.itemText1}>Засаг захиргааны хуваарь:</Text>
                <Text style={styles.itemText2}>{el.location_name}</Text>
                <Text style={styles.itemText1}>Талбайн хэмжээ, га:</Text>
                <Text style={styles.itemText2}>{el.location_area}</Text>
                <Text style={styles.itemText1}>Хамгаалалтанд авсан үндэслэл:</Text>
                <Text style={styles.itemText2}>{el.purpose}</Text>
                <Text style={styles.itemText1}>Дэлхийн унаган байгаль, соёлын өв газар:</Text>
                <Text style={styles.itemText2}>{checkElement(el.site_wh)}</Text>
                <Text style={styles.itemText1}>Хүн ба Шим мандлын нөөц газар:</Text>
                <Text style={styles.itemText2}>{checkElement(el.siteMab)}</Text>
                <Text style={styles.itemText1}>Рамсарын конвенцид бүртгэгдсэн газар:</Text>
                <Text style={styles.itemText2}>{checkElement(el.siteRc)}</Text>
                <Text style={styles.itemText1}>Хил дамнасан ТХГН:</Text>
                <Text style={styles.itemText2}>{checkElement(el.siteBp)}</Text>
                <Text style={styles.itemText1}>Байгаль, газарзүйн онцлог:</Text>
                <Text style={styles.itemText2}>{el.description}</Text>
                <Button onPress={() => Linking.openURL('https://eic.mn/spa/spa.php?action=more&basic_id='+el.basic_id)} title='Дэлгэрэнгүй мэдээлэл харах' />
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
