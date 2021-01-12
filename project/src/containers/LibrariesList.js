import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
import ShopsScreen from '../screens/main/ShopsScreen'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Feather } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppBackgroundColor = '#3BBD1C'

class LibraryList extends Component {


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
    return this.props.libraries.map((library) => {
      return (

        <TouchableOpacity onPress={() => this.props.navigation.navigate("LibraryInfo", {
          title: library.title,
          workHours: library.workHours,
          location: library.location,
          uri: library.uri,
          icon: library.icon,
          coordinates: library.coordinates,
          phonenumber: library.phonenumber,
          email: library.email,
          rating: library.rating,
          website: library.website,
          color: this.state.color
        })}
          style={{ flex: 1, flexDirection: 'row', borderRadius: 16, backgroundColor: this.state.color + '20', marginStart: 10, marginEnd: 10, marginTop: 10, height: 200, }} key={library.id}>
          <Image style={styles.image} source={{ uri: library.uri }} />
          <View style={styles.info}>
            <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: this.state.color, fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>{library.title}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
              <Icon style={{ fontSize: 12, color: this.state.color }} name='md-navigate' />
              <Text style={{ color: this.state.color, fontSize: 10 }}>{library.location}</Text>
            </View>

          </View>
        </TouchableOpacity>

      );
    });
  }
  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        {this.showList()}
      </View>

    );
  }
}



function mapStateToProps(state) {
  return {
    libraries: state.libraries
  };
}

export default connect(mapStateToProps)(LibraryList)


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 16,
    margin: 10
  },
  info: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },


})