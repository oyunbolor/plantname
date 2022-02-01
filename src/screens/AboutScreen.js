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
                <Text style={styles.titleText}>Улсын тусгай хамгаалалттай газар</Text>
                <Text style={styles.titleText}>v2.0</Text>
                <Separator />
                <Text style={styles.itemText1}>Энэхүү бүтээл нь Монгол орны улсын тусгай хамгаалалтад авсан газар нутгийн мэдээллийг агуулна.</Text>
                <Separator />
                <Text style={styles.itemText2}>Тусгай хамгаалалттай газрыг зориулалтаар нь Дархан цаазат газар, Байгалийн цогцолборт газар, Байгалийн нөөц газар ба Дурсгалт газар гэж 4 үндсэн төрөлд хуваадаг.</Text>
                <Text style={styles.itemText2}>- Байгалийн бүс, бүслүүрийн онцлог, хэв шинжийг төлөөлж чадах унаган төрхөө хадгалсан байдал, шинжлэх ухааны онцгой ач холбогдлыг нь харгалзан байгаль орчны тэнцвэрт байдлыг хангах зорилгоор улсын тусгай хамгаалалтад авсан газар нутгийг <Text style={styles.itemText3}>Дархан цаазат газар</Text> гэнэ.</Text>
                <Text style={styles.itemText2}>- Байгалийн унаган төрхөө харьцангуй хадгалсан, түүх, соёл, шинжлэх ухааны болон танин мэдэхүй, экологийн хүмүүжилд ач холбогдол бүхий улсын тусгай хамгаалалтад авсан газар нутгийг <Text style={styles.itemText3}>Байгалийн цогцолборт газар</Text> гэнэ.</Text>
                <Text style={styles.itemText2}>- Байгалийн тодорхой хэв шинж, аль нэгэн нөөц, баялгийг хамгаалах, хадгалах, нөхөн сэргээх нөхцөлийг бүрдүүлэх зорилгоор улсын тусгай хамгаалалтад авсан газар нутгийг <Text style={styles.itemText3}>Байгалийн нөөц газар</Text> гэнэ.</Text>
                <Text style={styles.itemText2}>- Байгалийн өвөрмөц тогтоц, түүх, соёлын ул мөрийг уламжлагдан хадгалагдсан байгалийн байдлаар нь өвлөн үлдээх зорилгоор улсын тусгай хамгаалалтад авсан газар нутгийг <Text style={styles.itemText3}>Дурсгалт газар</Text> гэнэ.</Text>
                <Separator />
                <Text style={styles.itemText2}>Хаяг: Ус цаг уур, орчны судалгаа, мэдээллийн хүрээлэн</Text>
                <Text style={styles.itemText2}>Вэб сайт: <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https:/eic.mn/spa/')}> https:/eic.mn/spa/ </Text></Text>
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
