import * as React from 'react';
import {View,StyleSheet,ScrollView} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import LibraryList from '../../containers/LibrariesList';
import {createStore} from "redux"
import {Provider} from 'react-redux'
import allReducers from '../../reducers';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
const AppBackgroundColor = '#3BBD1C'
const store = createStore(allReducers)

const ShopsScreen = ({navigation,route}) => {
    const { t, i18n } = useTranslation();
    const { color } = route.params;
    
    return (
        
        <Provider store={store}>
            <Container>
                <Header style={{backgroundColor: color}}>
                <StatusBar backgroundColor={color}/>
                    <Left>
                        <Button transparent onPress={()=>navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{t('Libraries')}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='md-albums' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:  color+'10',}}>
                    <LibraryList navigation={navigation}/>
                </Content>
                <Footer>
                    <FooterTab >
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Home',{color:color})}>
                                <Icon name="home"/>
                                <Text>{t('Home')}</Text>
                            </Button>
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Shops',{color:color})}>
                                <Icon name="lock-closed"/>
                                <Text>{t('Shops')}</Text>
                            </Button>
                            <Button vertical active style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Libraries',{color:color})}>
                            <Icon name="md-albums"/>
                                <Text>{t('Libraries')}</Text>
                            </Button>
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Books',{color:color})}>
                            <Icon name="book"/>
                                <Text>{t('Books')}</Text>
                            </Button>
                            
                    </FooterTab>
                </Footer>
            </Container>
        </Provider>
    );
}

export default ShopsScreen;

const styles = StyleSheet.create({
  container:{
    flex:1
  },
})