import * as React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Item, Input, Left, Body, Icon, Text, Card, Right } from 'native-base';
import { SearchBar } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import PopularList from '../../containers/PopularList';
import { createStore } from 'redux';
import allReducers from '../../reducers';
import './../../localization/i18n'
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AppBackgroundColor = '#3BBD1C'
const { height, width } = Dimensions.get('screen')
const store = createStore(allReducers)

const HomeScreen = ({ navigation }) => {
    const { t, i18n } = useTranslation()
    const [ colors,setColor ] = React.useState(AppBackgroundColor);
    
    const readData = async () => {
        try {
            const color1 = await AsyncStorage.getItem('@save_color')

            if (color1 !== null) {
                setColor(color1)
            }
        } catch (e) {
            alert('Failed to fetch the data from storage')
            console.log(e);
        }
    }
    readData();


    return (
        <Provider store={store}>
            <Container>
                <Header style={{ backgroundColor: colors }}>
                    <StatusBar backgroundColor={colors} />
                    <Left>
                        <Button transparent onPress={() => navigation.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{t('Home')}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='home' />
                        </Button>
                    </Right>
                </Header>
                <Content style={{ backgroundColor: colors + '10', }}>
                    <Container style={{ height: 170, alignItems: 'center', backgroundColor: '#3BBD1C00', marginBottom: 50 }}>
                        <Container style={styles.mainlogo}>
                            <Image style={styles.logo} source={require("./../../images/ic_launcher_round.png")} />
                        </Container>
                    </Container>
                    <PopularList navigation={navigation} color={colors}/>
                </Content>
                <Footer>
                    <FooterTab >
                        <Button vertical active style={{ backgroundColor: colors, borderRadius: 0 }} onPress={() => navigation.navigate('Home', { color: colors })}>
                            <Icon name="home" />
                            <Text>{t('Home')}</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: colors, borderRadius: 0 }} onPress={() => navigation.navigate('Shops', { color: colors })}>
                            <Icon name="lock-closed" />
                            <Text>{t('Shops')}</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: colors, borderRadius: 0 }} onPress={() => navigation.navigate('Libraries', { color: colors })}>
                            <Icon name="md-albums" />
                            <Text>{t('Libraries')}</Text>
                        </Button>
                        <Button vertical style={{ backgroundColor: colors, borderRadius: 0 }} onPress={() => navigation.navigate('Books', { color: colors })}>
                            <Icon name="book" />
                            <Text>{t('Books')}</Text>
                        </Button>

                    </FooterTab>
                </Footer>
            </Container>
        </Provider>
    );
}

export default HomeScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        color: 'white',
        fontSize: 50,
    },
    logo: {
        width: 150,
        height: 150,
    },
    mainlogo: {
        height: 150,
        width: 150,
        margin: 20,
        borderRadius: 75,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11,
        marginBottom: 0
    },
})