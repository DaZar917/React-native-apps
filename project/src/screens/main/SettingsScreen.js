import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useState, useEffect } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Item, Input, Left, Body, Icon, Text, Card, Right, View } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import PopularList from '../../containers/PopularList';
import { createStore } from 'redux';
import allReducers from '../../reducers';
import './../../localization/i18n'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorPropType } from 'react-native';
var AppBackgroundColor = '#3BBD1C'
const { height, width } = Dimensions.get('screen')
const store = createStore(allReducers)
const STORAGE_KEY = '@save_color'


const SettingsScreen = ({ navigation }) => {
    const [color, setColor] = useState(AppBackgroundColor)
    const saveData = async (color) => {
        try {
            await AsyncStorage.setItem(STORAGE_KEY, color)
            console.log(color);
            readData()
        } catch (e) {
            console.log(color);
            console.log(e);
        }
    }

    
    const readData = async () => {
        try {
            const color = await AsyncStorage.getItem(STORAGE_KEY)

            if (color !== null) {
                setColor(color)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    useEffect(() => {
        readData()
      }, [])
    const { t, i18n } = useTranslation();

    return (
        <Provider store={store}>
            <Container>
                <Header style={{backgroundColor: color,}}>
                    <StatusBar backgroundColor={color} />
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{t('Settings')}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-settings' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor: color+'10'}}>
                    <View style={{flex: 1, height: 140, alignItems: 'center',backgroundColor: color+'00',}}>
                        <Image style={styles.image} source={require('./../../images/ic_launcher_round.png')} />
                    </View>
                    <View style={{borderRadius: 16,  marginLeft: 10,  marginRight: 10,  marginTop: 30, justifyContent: 'center', alignItems: 'center',backgroundColor: color+'30',}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20,color: color}}>{t('Select your favorite color')}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => saveData('#3BBD1C')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#3BBD1C' }} />
                            <TouchableOpacity onPress={() => saveData('#6F6F6F')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#6F6F6F' }} />
                            <TouchableOpacity onPress={() => saveData('#006400')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#006400' }} />
                            <TouchableOpacity onPress={() => saveData('#E34141')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#E34141' }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => saveData('#8a2be2')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#8a2be2' }} />
                            <TouchableOpacity onPress={() => saveData('#cd0000')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#cd0000' }} />
                            <TouchableOpacity onPress={() => saveData('#0000ff')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#0000ff' }} />
                            <TouchableOpacity onPress={() => saveData('#3b5998')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#3b5998' }} />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={() => saveData('#6e8b3d')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#6e8b3d' }} />
                            <TouchableOpacity onPress={() => saveData('#65070c')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#65070c' }} />
                            <TouchableOpacity onPress={() => saveData('#000000')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#000000' }} />
                            <TouchableOpacity onPress={() => saveData('#55c2ff')} style={{ width: 50, height: 50, margin: 10, marginHorizontal: 15, borderRadius: 8, backgroundColor: '#55c2ff' }} />
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab >
                        <Button vertical style={styles.footerTab,{backgroundColor: color}} onPress={() => navigation.navigate('Home',{color: color})}>
                            <Icon name="home" />
                            <Text>{t('Home')}</Text>
                        </Button>
                        <Button vertical style={styles.footerTab,{backgroundColor: color}} onPress={() => navigation.navigate('Shops',{color: color})}>
                            <Icon name="lock-closed" />
                            <Text>{t('Shops')}</Text>
                        </Button>
                        <Button vertical style={styles.footerTab,{backgroundColor: color}} onPress={() => navigation.navigate('Libraries',{color: color})}>
                            <Icon name="md-albums" />
                            <Text>{t('Libraries')}</Text>
                        </Button>
                        <Button vertical style={styles.footerTab,{backgroundColor: color}} onPress={() => navigation.navigate('Books',{color: color})}>
                            <Icon name="book" />
                            <Text>{t('Books')}</Text>
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>
        </Provider>
    );
}

export default SettingsScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footerTab: {
        borderRadius: 0
    },
    image: {
        width: 100,
        height: 100,
        margin: 20

    },
})