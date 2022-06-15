import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

const DataThumbnail = ({data}) => {
  const thousandify = require('thousandify')
  const navigation =useNavigation();

  return (
    <TouchableOpacity onPress={()=>navigation.navigate("Detail", {dataid: data.species_id})}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{data.species_name_mn}</Text>
        <Text>{data.kingdom_name_mn}</Text>
        <Text>{data.species_name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DataThumbnail

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#737373",
  },
  titleText: {
    fontWeight: 'bold',
    color: "#266D9F",
  },
})