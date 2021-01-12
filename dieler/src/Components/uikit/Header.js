import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const Header = ({ title, backgroundColor }) => {
    return(
        <View style={styles.viewStyle ,{backgroundColor: backgroundColor,height:116,paddingLeft: 22,justifyContent:"center",shadowColor: "#000",shadowOffset: {width:0, height:2},shadowOpacity: 0.2,elevation: 2,position: "relative"}}>
            <Text style={styles.textStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
      color: "#fff",
      fontSize: 20,
    }
  });
  


export default Header