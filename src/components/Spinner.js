import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const Spinner = ({ showText = true }) => {
  return (
    <View>
      <ActivityIndicator size="large" color="#99AAAB" />
      <Text style={styles.itemText}>Түр хүлээнэ үү...</Text>
    </View>
  );
};

export default Spinner

const styles = StyleSheet.create({
  itemText: {
    margin: 10,
    fontWeight: 'bold',
    color: "#99AAAB",
    alignSelf: "center",
  },
})