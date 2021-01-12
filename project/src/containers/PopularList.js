import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Item, Input, Left, Body, Icon, Text, Card } from 'native-base';

import ShopsScreen from '../screens/main/ShopsScreen'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppBackgroundColor = '#3BBD1C'






class PopularList extends Component {


    state = {
        color: AppBackgroundColor
    }
    constructor(navigation) {
        super(navigation)
    }

    componentDidUpdate(){
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
        return this.props.populars.map((popular) => {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate("BookInfo", {
                    titlefull: popular.titlefull,
                    authorfull: popular.authorfull,
                    uri: popular.uri,
                    locations: popular.locations,
                    coordinates: popular.coordinates,
                    description: popular.description,
                    publication: popular.publication,
                    price: popular.price,
                    color: this.state.color,
                    leaseperiod: popular.leaseperiod,
                })}
                    key={popular.id} style={{ height: 200, width: 150, backgroundColor: this.state.color+'20', alignItems: 'center', borderRadius: 10, marginStart: 10, marginEnd: 10}}>
                    <Container style={styles.cardlogo}>
                        <Image style={styles.bookimage} source={{ uri: popular.uri }} />
                    </Container>
                    <Text style={{color: this.state.color,fontSize: 24,  fontFamily: 'Roboto', fontStyle: 'italic'}}>{popular.title}</Text>
                    <Text style={{color: this.state.color, fontSize: 12, fontFamily: 'Roboto', fontStyle: 'italic'}}>{popular.author}</Text>
                </TouchableOpacity>


            );
        });
    }
    render() {
        return (
            <ScrollView horizontal>
                {this.showList()}
            </ScrollView>

        );
    }
}



function mapStateToProps(state) {
    return {
        populars: state.populars
    };
}

export default connect(mapStateToProps)(PopularList)


const styles = StyleSheet.create({
    cardlogo: {
        height: 100,
        width: 100,
        margin: 10,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
    },
    bookimage: {
        height: 140,
        width: 100,
        borderRadius: 8,
    },
})