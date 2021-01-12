import * as React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Item, Input, Left, Body, Icon, Text, Card, Right } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import PopularList from '../../containers/PopularList';
import { createStore } from 'redux';
import allReducers from '../../reducers';
import { useTranslation } from 'react-i18next';
import FictionList from '../../containers/FictionList';
import MagazinesList from '../../containers/MagazinesList';
import NewsList from '../../containers/NewsList';
import ScintificList from '../../containers/ScintificList';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppBackgroundColor = '#3BBD1C'
const {height,width} = Dimensions.get('screen')
const store = createStore(allReducers)

const BookScreen = ({navigation,route}) => {
    const { color } = route.params;
    const { t, i18n } = useTranslation();
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
                        <Title>{t('Books')}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='book' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:  color+'10',}}>
                <View style={styles.imageView}>
                    <Image style={styles.image} source={require('./../../images/ic_launcher_round.png')}/>
                </View>
                
                    <View style={{marginTop: 10, marginStart: 10, marginEnd: 10, borderRadius: 16,  padding: 10, backgroundColor: color+'20',  }}>
                        <Text style={{ fontSize: 20, margin: 8, color: color, fontWeight: 'bold'}}>{t('Fiction')}</Text>
                        <FictionList navigation={navigation}></FictionList>
                    </View>

                    <View style={{marginTop: 10, marginStart: 10, marginEnd: 10, borderRadius: 16,  padding: 10, backgroundColor: color+'20',  }}>
                        <Text style={{ fontSize: 20, margin: 8, color: color, fontWeight: 'bold'}}>{t('Magazines')}</Text>
                        <MagazinesList navigation={navigation}></MagazinesList>
                    </View>

                    <View style={{marginTop: 10, marginStart: 10, marginEnd: 10, borderRadius: 16,  padding: 10, backgroundColor: color+'20',  }}>
                        <Text style={{ fontSize: 20, margin: 8, color: color, fontWeight: 'bold'}}>{t('News')}</Text>
                        <NewsList navigation={navigation}></NewsList>
                    </View>
                    <View style={{marginBottom:10}}>
                        <View style={{marginTop: 10, marginStart: 10, marginEnd: 10, borderRadius: 16,  padding: 10, backgroundColor: color+'20',  }}>
                            <Text style={{ fontSize: 20, margin: 8, color: color, fontWeight: 'bold'}}>{t('Scientific literature')}</Text>
                            <ScintificList navigation={navigation}></ScintificList>
                        </View>
                    </View>
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
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Libraries',{color:color})}>
                            <Icon name="md-albums"/>
                                <Text>{t('Libraries')}</Text>
                            </Button>
                            <Button vertical active style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Books',{color:color})}>
                            <Icon name="book"/>
                                <Text>{t('Books')}</Text>
                            </Button>
                            
                    </FooterTab>
                </Footer>
            </Container>
        </Provider>
    );
}

export default BookScreen;



const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        color: 'white',
        fontSize: 50,
    },
    logo:{
        width:150,
        height:150,  
    },
    mainlogo:{
        height:150,
        width:150,
        margin:20,
        borderRadius:75,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
            },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        marginBottom:0
    },
    upperPage:{
        height:170,
        alignItems: 'center',
    },
    image:{
        width: 100,
        height: 100,
        margin: 20

    },
    imageView:{
        flex: 1,
        height: 140,
        alignItems: 'center',
    }
})