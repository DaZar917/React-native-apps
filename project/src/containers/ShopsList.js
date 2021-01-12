import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {View,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native'
import ShopsScreen from '../screens/main/ShopsScreen'
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Feather } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppBackgroundColor = '#3BBD1C'

class ShopList extends Component {
  
  state = {
    color: '#3BBD1C'
  }
  constructor(navigation) {
    super(navigation)
  }
  componentDidMount() {
    this.readData()
  }
  componentDidUpdate() {
    this.readData()
  }


  async readData() {
    try {
      const color = await AsyncStorage.getItem('@save_color')

      if (color !== null) {
        this.setState({ color: color })
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
      console.log(e);
    }
  }



  showList() {
    return this.props.shops.map((shop) => {
      return (

        <TouchableOpacity onPress={() => this.props.navigation.navigate("LibraryInfo", {
          title: shop.title,
          workHours: shop.workHours,
          location: shop.location,
          uri: shop.uri,
          icon: shop.icon,
          coordinates: shop.coordinates,
          phonenumber: shop.phonenumber,
          email: shop.email,
          rating: shop.rating,
          website: shop.website,
          color: this.state.color
        })}
          style={{ flex: 1, flexDirection: 'row', borderRadius: 16, backgroundColor: this.state.color + '20', marginStart: 10, marginEnd: 10, marginTop: 10, height: 200, }} key={shop.id}>
          <Image style={styles.image} source={{ uri: shop.uri }} />
          <View style={styles.info}>
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: this.state.color, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>{shop.title}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={{ fontSize: 12, color: this.state.color }} name='md-navigate' />
              <Text style={{ color: this.state.color, fontSize: 10 }}>{shop.location}</Text>
            </View>

          </View>
        </TouchableOpacity>

      );
    });
  }
    render(){
        return(
            <View style={{marginBottom: 10}}>
                {this.showList()}
            </View>
            
        );
    }
}



function mapStateToProps(state){
    return{
        shops: state.shops
    };
}

export default connect(mapStateToProps)(ShopList)


const styles = StyleSheet.create({
    container:{
      flex:1
    },
    card:{ 
      flex: 1,
      flexDirection: 'row',
      borderRadius: 16,
      backgroundColor: '#3BBD1C20',
      marginStart: 10,
      marginEnd: 10,
      marginTop: 10,
      height: 200,
    },
    image:{
      height: 180,
      width: 180,
      borderRadius: 16,
      margin: 10
    },
    info:{
      flex:1,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
  })