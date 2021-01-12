import React, { Component } from 'react';
import {Image, StyleSheet, NativeEventEmitter, NativeModules} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab,Button, Left, Right, Body, Icon, Text, View , Subtitle} from 'native-base';
import RNDeviceRotation from 'react-native-device-rotation';




export default class App extends Component {

  
  constructor(props) {
    super(props);
    this.state = {
      // date: new Date(),
      alpha: 0,
      beta: 0,
      gamma: 0,
      grad: 0,
      isOn: 1,
      x: 0,
      y: 0,
    };
  }


  compassHeading = (alpha,beta,gamma) => {
  var degtorad = Math.PI / 180;


  var _x = beta  ? beta  * degtorad : 0; // beta value
  var _y = gamma ? gamma * degtorad : 0; // gamma value
  var _z = alpha ? alpha * degtorad : 0; // alpha value

  var cX = Math.cos( _x );
  var cY = Math.cos( _y );
  var cZ = Math.cos( _z );
  var sX = Math.sin( _x );
  var sY = Math.sin( _y );
  var sZ = Math.sin( _z );

  // Calculate Vx and Vy components
  var Vx = - cZ * sY - sZ * sX * cY;
  var Vy = - sZ * sY + cZ * sX * cY;

  // Calculate compass heading
  var compassHeading = Math.atan( Vx / Vy );

  // Convert compass heading to use whole unit circle
  if( Vy < 0 ) {
    compassHeading += Math.PI;
  } else if( Vx < 0 ) {
    compassHeading += 2 * Math.PI;
  }


  return compassHeading * ( 180 / Math.PI ) - 90 ;
  }

  componentDidMount() {
    this.compassHeading()
    const orientationEvent = new NativeEventEmitter(RNDeviceRotation)
    this.subscription = orientationEvent.addListener('DeviceRotation', event => {
      this.setState({
        alpha: event.azimuth ,
        beta: event.pitch + 0.1,
				gamma: event.roll,
        grad: this.compassHeading(this.state.alpha,this.state.gamma,this.state.beta),
      })

      if (this.state.isOn != 3){
        this.setState({
          x: 0,
          y: 0
        }) 
      } else if (this.state.isOn==3) {
        if(this.state.beta>180 && this.state.x > -300 ){
          this.setState({x: this.state.x-3})  
        }else 
        if (this.state.beta<180 && this.state.beta>1 && this.state.x < 300) {
          this.setState( {x: this.state.x+3} ) 
        }if(this.state.gamma>180 && this.state.y > -300){
          this.setState({y: this.state.y-3}) 
        }else 
        if (this.state.gamma<180 && this.state.gamma>1 && this.state.y < 300) {
          this.setState({y: this.state.y+3}) 
        }
      }
      
    })
    RNDeviceRotation.start()
    
  }

  
  componentWillUnmount() {
    if (this.subscription) {
			this.subscription.remove()
    }
    this.compassHeading()
  }

  compassFunc = () => {
    this.setState({
      isOn: 1
    })
  }

  azimuthFunc = () => {
    this.setState({
      isOn: 2
    })
  }

  gameFunc = () => {
    this.setState({
      isOn: 3
    })
  }

  appState = () => {
    if(this.state.isOn == 1){
      return <Image source={require('./assets/compass.png')} style={{ width: 300,height: 300, transform: [{rotate: (this.state.grad ) + "deg"}]}}/>;
    } else 
    if (this.state.isOn == 2){
      return <Text style={styles.azimuthText}>{this.state.grad.toFixed(0)}</Text>;
    } else 
    if (this.state.isOn == 3){
      return <Icon name='ios-baseball' style={{fontSize: 50, color: '#a4c639', marginBottom: this.state.x, marginLeft: this.state.y}}/>
    }
  }



  render() {
    return (
      <Container >
        <Header style={styles.hedfoot}>
          <Left>
            <Icon name="compass" style={styles.icon}>
              </Icon></Left>
          <Body>
            <Title>Compass</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={ styles.content }>

          {this.appState(this.state.isOn)}

        </Content> 
        
        <Footer>
          <FooterTab style={styles.hedfoot}>
            <Button style={styles.Buttons} full onPress={ this.compassFunc }>
              <Title>Compass</Title>
            </Button>       
            <Button style={styles.Buttons} full onPress={ this.azimuthFunc }>
              <Title>Azimuth</Title>
            </Button>  
            <Button style={styles.Buttons} full onPress={ this.gameFunc }>
              <Title>Game</Title>
            </Button>  
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
  hedfoot:{
    backgroundColor: "#a4c639"
  },
  icon:{
    color: "#ffffff"
  },
  content:{
    flex:1,
    alignItems: "center",
    justifyContent: "center"
  },
  azimuthText:{
    color: "#a4c639",
    fontSize: 50
  },
  Ball:{
    fontSize: 50, 
    color: '#a4c639',
    marginBottom: 300
  }
});
