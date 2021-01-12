import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Item, Input, Left, Body, Icon, Text, Card } from 'native-base';

import ShopsScreen from '../screens/main/ShopsScreen'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppBackgroundColor = '#3BBD1C'
class ScintificList extends Component {
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
    componentWillUnmount(){
        this.readData
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


    showList(){
        return this.props.books.map((book)=>{
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate("BookInfo", {
                    titlefull: book.titlefull,
                    authorfull: book.authorfull,
                    uri: book.uri,
                    locations: book.locations,
                    description: book.description,
                    coordinates: book.coordinates,
                    publication: book.publication,
                    price: book.price,
                    leaseperiod: book.leaseperiod,
                    color: this.state.color
                })}
                    key={book.id} style={{height: 200, width: 150, backgroundColor: this.state.color+'20', alignItems: 'center',  borderRadius: 10,  marginStart: 10, marginEnd: 10}}>
                    <Container style={styles.cardlogo}>
                        <Image style={styles.bookimage} source={{ uri: book.uri }} />
                    </Container>
                    <Text style={{color: this.state.color, fontSize: 24, fontFamily: 'Roboto',  fontStyle: 'italic'}}>{book.title}</Text>
                    <Text style={{color: this.state.color, fontSize: 12,  fontFamily: 'Roboto', fontStyle: 'italic'}}>{book.author}</Text>
                </TouchableOpacity>

                
            );
        });
    }
    render(){
        return(
            <ScrollView horizontal>
                {this.showList()}
            </ScrollView>
            
        );
    }
}



function mapStateToProps(state){
    return{
        books: state.scintifics
    };
}

export default connect(mapStateToProps)(ScintificList)


const styles = StyleSheet.create({
    card:{
        height:200,
        width:150,
        backgroundColor: '#3BBD1C20',
        alignItems:'center',
        borderRadius: 10,
        marginStart:10,
        marginEnd:10
    },
    cardlogo:{
        height:100,
        width:100,
        margin:10,
        borderRadius:8,
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
    bookimage:{
        height:140,
        width:100,
        borderRadius:8,
    },
    bookauthor:{
        color: AppBackgroundColor,
        fontSize: 12,
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    },
    booktitle:{
        color: AppBackgroundColor,
        fontSize:24,
        fontFamily: 'Roboto',
        fontStyle: 'italic'
    
    }
  })