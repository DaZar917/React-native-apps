import React, { useState } from 'react'

import { Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Text, List, ListItem, Header, Body, Icon, Left, Right, View, Item } from "native-base";
import { DrawerItemList, DrawerItem } from '@react-navigation/drawer';
const routes = [{ id: '1', name: 'Home', icon: 'home' }, { id: '2', name: 'Shops', icon: 'lock-closed' }, { id: '3', name: 'Libraries', icon: 'md-albums' }, { id: '4', name: 'Books', icon: 'book' }, { id: '5', name: 'Map', icon: 'md-map' }, {id:'6' , name: 'Settings', icon:'md-settings'}];
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';
import { FlatList } from 'react-native';
const STORAGE_KEY = '@save_color'
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppBackgroundColor = '#3BBD1C'


export function DrawerContent(props) {
    const [color, setColor] = useState(AppBackgroundColor)
    const readData = async () => {
        try {
            const color = await AsyncStorage.getItem(STORAGE_KEY)

            if (color !== null) {
                setColor(color)
            }else setColor(AppBackgroundColor)
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }
    }
    readData()
    const { t, i18n } = useTranslation();
    return (
        <Container style={{flex: 1,backgroundColor: color+'00',}}>
            <Content style={{ flex: 1, backgroundColor: color+'20' }}>
                <View style={{flex: 1, height: 140, alignItems: 'center', backgroundColor: '#3BBD1C00',}}>
                    <Image style={styles.image} source={require('./../../images/ic_launcher_round.png')} /></View>

                <List style={{ flex: 1, backgroundColor: '#3BBD1C00', }}
                    dataArray={routes}
                    renderRow={data => {
                        return (
                            <ListItem style={{flex: 1,  borderColor: '#3BBD1C00',  borderWidth: 0, backgroundColor: '#3BBD1C00', margin: 0,height:70}} key={data.id}
                                button onPress={() => props.navigation.navigate(data.name,{color:color})}>
                                <Icon name={data.icon} style={{ padding: 10,  fontSize: 25,  marginRight: 30, color: color}} />
                                <Text style={{fontSize: 20, padding: 10, color: color, fontWeight: 'bold', fontStyle: 'italic'}}>{t(data.name)}</Text>
                            </ListItem>
                        );
                    }}
                />
            </Content>
        </Container>

    )
}



const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
})