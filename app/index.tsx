import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';


export default function Index() {
  //useEffect to navigate to bmi page after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => { router.replace('/bmi'); }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/bmi.png")}
        style={styles.imglogo}
      />
      <Text style={[styles.appName, { fontSize: 40 }]}>BMI Calculator</Text>
      <Text style={[styles.appName, { fontSize: 25 }]}>คำนวณ BMI</Text>
      <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 60 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  appName: {

    color: 'white',
    marginTop: 20,
    fontFamily: 'Kanit_700Bold',
  },

  imglogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  container: {
    flex: 1,
    alignItems: 'center',//center align items horizontally
    justifyContent: 'center',//center align items vertically
    backgroundColor: '#1990be',
  }

});