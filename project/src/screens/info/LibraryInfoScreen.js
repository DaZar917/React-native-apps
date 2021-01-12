import * as React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Linking } from 'react-native'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Rating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';
import { StatusBar } from 'react-native';

const AppBackgroundColor = '#3BBD1C'
const { height, width } = Dimensions.get('screen')


const ShopInfoScreen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation();
  const { title, workHours, uri, icon, location, coordinates, phonenumber, rating, email, website, color } = route.params;
  return (
    <Container>
      <Header style={{ backgroundColor: color }}>
        <StatusBar backgroundColor={color} />
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right>
          <Icon style={styles.iconwhite} name={icon} />
        </Right>
      </Header>
      <Content style={{ backgroundColor: color + '10', }}>
        <ScrollView style={styles.main}>
          <View style={styles.boxes}>
            <Image
              source={{ uri: uri }}
              style={styles.photo} />
          </View>
          <View style={{ backgroundColor: color, alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
            <Text style={styles.ratingText}>{t('Rating')} : </Text>
            <Rating
              readonly={true}
              startingValue={rating}
              type='custom'
              ratingColor='gold'
              ratingBackgroundColor={color}
              backgroundColor={color}

              imageSize={24}
              style={{ paddingVertical: 10 }}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("EntityMap", {
            locations: [{
              id: 1,
              title: location,
              coordinates: coordinates,
              
            }],
            color: color
          })} style={styles.workingTime}>
            <Icon style={{color: color}} name="md-navigate" size={24} color={color} />
            <Text style={styles.text}>{location}</Text>
          </TouchableOpacity>
          <View style={styles.workingTime}>
            <Icon style={{color: color}} name="md-call" size={24} color={color} />
            <TouchableOpacity onPress={() => Linking.openURL('tel:' + phonenumber)} >
              <Text style={styles.text}>{phonenumber}</Text>
            </TouchableOpacity>
          </View>





          <View style={styles.workingTime}>
            <Icon style={{color: color}} name="md-mail" size={24} color={color} />
            <TouchableOpacity onPress={() => Linking.openURL('mailto:' + email)} >
              <Text style={styles.text}>{email}</Text>
            </TouchableOpacity>

          </View>
          <View style={{ alignItems: 'center' }}>

            <TouchableOpacity
              onPress={() => Linking.openURL(website)}
              style={{
                alignItems: 'center', flexDirection: 'row', backgroundColor: color, height: 40, borderRadius: 24, padding: 10,
                margin: 20, elevation: 10, paddingStart: 24, paddingEnd: 24,
              }}
            >
              <Icon style={{ color: 'white', marginEnd: 10 }} name="md-planet" size={24} color="#fff" />
              <Text style={styles.iconwhite} >{t('Website')}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                alignItems: 'center',
                width: width * 0.8,
                borderBottomColor: color,
                borderBottomWidth: 2,
              }}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.contentMain}>
              <View style={{flexDirection: 'row', backgroundColor: color+'50', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Icon style={styles.iconwhite} name='md-time' />
                <Text style={styles.iconwhite} style={styles.textContent}>{workHours.monday}</Text>
                <Icon style={styles.iconwhite} name='md-time' />
              </View>
              <View style={styles.contentBoxShadow}>
                <Icon style={{color: color}} name='md-time' />
                <Text style={{color: color}} style={styles.textContent}>{workHours.tuesday}</Text>
                <Icon style={{color: color}} name='md-time' />
              </View>
              <View style={{flexDirection: 'row', backgroundColor: color+'50', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Icon style={styles.iconwhite} name='md-time' />
                <Text style={styles.iconwhite} style={styles.textContent}>{workHours.wednesday}</Text>
                <Icon style={styles.iconwhite} name='md-time' />
              </View>
              <View style={styles.contentBoxShadow}>
                <Icon style={{color: color}} name='md-time' />
                <Text style={{color: color}} style={styles.textContent}>{workHours.thursday}</Text>
                <Icon style={{color: color}} name='md-time' />
              </View>
              <View style={{flexDirection: 'row', backgroundColor: color+'50', paddingHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Icon style={styles.iconwhite} name='md-time' />
                <Text style={styles.iconwhite} style={styles.textContent}>{workHours.friday}</Text>
                <Icon style={styles.iconwhite} name='md-time' />
              </View>
            </View>


          </View>

        </ScrollView>
      </Content>
      <Footer>
        <FooterTab >
          <Button vertical style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Home')}>
            <Icon name="home" />
            <Text>{t('Home')}</Text>
          </Button>
          <Button vertical style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Shops')}>
            <Icon name="lock-closed" />
            <Text>{t('Shops')}</Text>
          </Button>
          <Button vertical active style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Libraries')}>
            <Icon name="md-albums" />
            <Text>{t('Libraries')}</Text>
          </Button>
          <Button vertical style={{ backgroundColor: color, borderRadius: 0 }} onPress={() => navigation.navigate('Books')}>
            <Icon name="book" />
            <Text>{t('Books')}</Text>
          </Button>

        </FooterTab>
      </Footer>
    </Container>
  )
}

export default ShopInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignContent: "center",
    backgroundColor: "#fff",
  },
  photo: {
    flex: 1,
    height: height * 0.3,
    width: width,

  },
  rating: {

  },
  ratingText: {
    marginLeft: 20,
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  workingTime: {
    marginLeft: 30,
    margin: 5,
    flexDirection: 'row'
  },
  text: {
    marginLeft: 10,
    color: '#000',
    fontSize: 18,
  },
  boxes: {
    width: width,
    flexDirection: 'row',
    flex: 1,
    alignContent: 'center',
    alignItems: "center",
  },
  content: {
    marginTop: 10,
    alignItems: 'center',
  },
  contentTitle: {
    color: '#000',
    fontSize: 18,
  },
  contentMain: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: width,
  },
  contentBox: {
    
  },
  contentBoxShadow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContent: {
    padding: 10,
    paddingLeft: 5,
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal'
  },
  iconwhite: { color: 'white' },
})