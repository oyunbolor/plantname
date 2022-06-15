import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Linking } from 'react-native'

const AboutScreen = () => {
    const Separator = () => (
        <View style={styles.separator} />
    );
    return (
        <SafeAreaView style={styles.container1}>
            <ScrollView style={styles.container2}>
                <Separator />
                <Text style={styles.titleText}>Ургамлын зүйлийн мэдээлэл</Text>
                <Separator />
                <Text style={styles.itemText1}>Өдгөө Монгол орны ургамлын аймагт 5 аймгийн (Гуурст, Замаг, Мөөг, Хөвд, Хаг) 19 хүрээнд багтах 61 ангийн 189 багийн 507 овогт хамаарах 1761 төрлийн 7678 зүйлийн ургамал ургана (Urgamal et al. 2014. Conspectus of the Vascular Plants of Mongolia).</Text>
                <Text style={styles.itemText2}>Хаяг: Ус цаг уур, орчны судалгаа, мэдээллийн хүрээлэн</Text>
                <Text style={styles.itemText2}>Вэб сайт: <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https:/eic.mn/flora/')}> Ургамлын мэдээллийн сан </Text></Text>
                <Text style={styles.itemText2}>Утас: 976 - 11 - 327982</Text>
                <Text style={styles.itemText2}>Имэйл: support@eic.mn</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AboutScreen

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
    titleText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: 16,
        color: "#266D9F",
    },
    itemText1: {
        textAlign: 'justify', 
        fontWeight: 'bold',
    },
    itemText2: {
        textAlign: 'justify', 
    },
    itemText3: {
        fontWeight: 'bold', 
        fontStyle: 'italic',
    },
    separator: {
        marginVertical: 5,
    },
})
