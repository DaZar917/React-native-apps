import * as React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, StatusBar, Image} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';

const AppBackgroundColor = '#3BBD1C'
const {height,width} = Dimensions.get('screen')


const BookInfoScreen = ({route,navigation}) => {
    const { t,i18n } = useTranslation()
    const { titlefull,authorfull,uri,locations,description,publication,price,leaseperiod,color} = route.params;

    
    return (

        <Container>
            
            <Header style={{backgroundColor: color}}>
            <StatusBar backgroundColor={color}/>
                <Left>
                    <Button transparent onPress={()=>navigation.goBack()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>FiBoo</Title>
                </Body>
                <Right>
                    <Icon style={{color:'white'}} name='book'/>
                </Right>
            </Header>
            <Content style={{backgroundColor:  color+'10', flex:1}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={styles.imageview}>
                        <Image style={styles.bookimage} source={{uri: uri}} />
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize: 18,  color: color,  fontWeight: 'bold',}}>{titlefull}</Text>
                        <Text style={{fontSize: 12,  color: color,}}>{t('by')} {authorfull},  {t('in')} {publication}</Text>
                        <View style={styles.aditionalinfo}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{color:color, fontSize:15,marginTop: 6}} name='md-cash'/>
                                    <Text style={{fontSize: 12, color: color, margin: 6}}>{t('Price')}: </Text>
                                </View>
                                <Text style={{fontSize: 20, color: color, fontWeight: 'bold',}}>{price} $</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between',}}>
                                <View style={{flexDirection:'row'}}>
                                    <Icon style={{color:color, fontSize:15,marginTop: 6}} name='md-pricetag'/>
                                    <Text style={{fontSize: 12, color: color, margin: 6}}>{t('Lease period')}: </Text>
                                </View>
                                <Text style={{fontSize: 20, color: color, fontWeight: 'bold',}}>{leaseperiod} {t('days')}</Text>
                            </View>
                        </View>

                        <View style={styles.website}>
                                <TouchableOpacity onPress ={()=> navigation.navigate("Map",{
                                    locations: locations,
                                    color: color
                                })} style={{backgroundColor: color,  padding: 10, borderRadius: 16, paddingEnd:24, paddingStart:24, flexDirection: 'row'}}>
                                    <Icon style={{marginRight:10,color:'white',fontSize:22}} name='md-navigate'/>
                                    <Text style={styles.buttonText}>{t('Locations')}</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{marginLeft: 8, marginRight: 8, padding: 10, borderRadius: 16, backgroundColor: color+'20',  alignItems: 'center', marginBottom: 8}}>
                    <View style={styles.descriptiontitleview}>
                        <Icon style={{color:color, marginRight: 40}} name='md-information-circle'/>
                        <Text style={{fontSize: 22, color: color,  fontStyle: 'italic',  fontWeight: 'bold'}}>{t('Description')}</Text>
                        <Icon style={{color:color, marginLeft: 40}} name='md-information-circle'/>
                    </View>
                    <View style={{marginTop: 5}}>
                        <Text style={{ color: color, fontWeight: '100'}}>{description}</Text>
                    </View>
                </View>

            </Content>
            <Footer>
            <FooterTab >
                            <Button vertical  style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Home')}>
                                <Icon name="home"/>
                                <Text>{t('Home')}</Text>
                            </Button>
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Shops')}>
                                <Icon name="lock-closed"/>
                                <Text>{t('Shops')}</Text>
                            </Button>
                            <Button vertical style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Libraries')}>
                            <Icon name="md-albums"/>
                                <Text>{t('Libraries')}</Text>
                            </Button>
                            <Button vertical active style={{backgroundColor: color, borderRadius:0}} onPress={()=>navigation.navigate('Books')}>
                            <Icon name="book"/>
                                <Text>{t('Books')}</Text>
                            </Button>
                            
                    </FooterTab>
            </Footer>
        </Container>
    )
}

export default BookInfoScreen;

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    bookimage:{
        height:220,
        width:150,
        borderRadius:8,
    },
    imageview:{
        flex: 4,
        margin:10,
        alignItems: 'center',
    },
    info:{
        flex: 5,
        marginTop: 20,
        marginEnd: 10
    },
    aditionalinfo:{
        marginTop: 20,
        marginBottom: 20,
        
    },
    website:{
        flex: 1,
        alignItems:'center'
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
    },
    descriptiontitleview:{
        alignItems:'center',
        flexDirection: 'row'
    },
  })