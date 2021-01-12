import React, { useEffect, useState,Component } from 'react';
import {  ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ButtonLongPress } from 'react-native';
import Header from './src/Components/uikit/Header'
import {Linking} from 'react-native'


// import * as ScreenOrientation from 'expo-screen-orientation';
// ScreenOrientation.unlockAsync();


export default class App extends Component {
  constructor(props) {
    super(props);

  
    this.selectionOnPress = this.selectionOnPress.bind(this);

  }

  state = {
    textValue: '',
    num1: '1',
    num2: '2',
    num3: '3',
    num4: '4',
    num5: '5',
    num6: '6',
    num7: '7',
    num8: '8',
    num9: '9',
    num0: '0',
    numStar: '*',
    numHesh: '#',
    numPlus: '+',
    callDrop: 'Call',
    selectedButton: '',
    backgroundColor1: '#a4c639',
    deleteButton: '#fff'
  }
  

  
  AddNumber = (num) => {
  
    if(this.state.textValue.length <= 15){

      if(this.state.textValue.length>=0)
      this.setState({
        deleteButton:"#000"
      })
      else this.setState({
        deleteButton:"#fff"
      })

      if(this.state.textValue.length<=5)
      this.setState({  
        textValue: this.state.textValue+num, 
      })  
      console.log(this.state.textValue);

            
      if(this.state.textValue[0]=='+' ){
        if(this.state.textValue.length==4 || this.state.textValue.length==8 || this.state.textValue.length==12 && this.state.textValue.length<=15){
          this.setState({
            textValue: this.state.textValue+' '+num,
          })
        }else if(this.state.textValue.length<=15){
          this.setState({  
          textValue: this.state.textValue+num, 
        })  
        }
        console.log("Added a number " + num + " Number: " + this.state.textValue );
      }
      else if(this.state.textValue[0]=='0'&&this.state.textValue[1]=='9'){
        if(this.state.textValue.length==4 || this.state.textValue.length==8 && this.state.textValue.length<=11){
          this.setState({
            textValue: this.state.textValue+' '+num,
          })
        }else if(this.state.textValue.length<=11){
          this.setState({  
            textValue: this.state.textValue+num, 
          })  
        }
        console.log("Added a number " + num + " Number: " + this.state.textValue );
      }
      else if(this.state.textValue[0]=='0'&&this.state.textValue[1]=='5'&&this.state.textValue[2]=='5' ){
        if(( this.state.textValue.length==3 || this.state.textValue.length==7) && this.state.textValue.length<=11){
          this.setState({
            textValue: this.state.textValue+' '+num,
          })
        }else if(this.state.textValue.length<=11){this.setState({  
          textValue: this.state.textValue+num, 
        })  
        }
        console.log("Added a number " + num + " Number: " + this.state.textValue );
      }else  this.setState({  
        textValue: this.state.textValue+num, 
      })  
     
    }
  }

  AddPlus = (num) => {
    if(this.state.textValue.length == 0 ){
      this.setState({
        textValue: this.state.textValue+num,
        deleteButton:"#000"
      })
    }
    else{
      this.setState({
        textValue: this.state.textValue+this.state.num0,
      })
    
    }
  }



  selectionOnPress = (userType) => {

    if(this.state.textValue.length >= 1 && this.state.callDrop=== "Call"){
      let phoneNumber1 = this.state.textValue.replace(/\s+/g, '');
      console.log(phoneNumber1);
      
      let phoneNumber = `tel:${phoneNumber1}`;
      Linking.openURL(phoneNumber);
      console.log("Calling " + this.state.textValue  + "...");
      alert("Calling " + this.state.textValue + "...");
      
      this.setState({ selectedButton: userType });
      this.setState ({
        callDrop: "Drop",
        backgroundColor1: '#ba160c',
      })
    } else if (this.state.callDrop=== "Drop"){
      console.log("Drop " + this.state.textValue  + "..." + this.state.backgroundColor1);
      alert("Drop " + this.state.textValue + "...");
      this.setState({ selectedButton: userType });
      this.setState ({
        callDrop: "Call",
        textValue: "",
        deleteButton: "#fff",
        backgroundColor1: '#a4c639'
      })
    }
    else {
      console.log("The field is empty");
      alert("The field is empty");
    }
    
  }

  delete = () => {
    
    if(this.state.textValue[this.state.textValue.length-2]!=" " )

    this.setState({
      textValue: this.state.textValue.slice(0, -1),
    })
    else if(this.state.callDrop!="Drop") this.setState({
      textValue: this.state.textValue.slice(0, -2),
    })
    if(this.state.textValue.length>1 )
      this.setState({
        deleteButton:"#000"
      })
      else this.setState({
        deleteButton:"#fff"
      })
    console.log("Delete." +" Number: " + this.state.textValue)
  }

  deleteAll = () => {
    this.setState({
      textValue: "",
      deleteButton:"#fff"
    })
    console.log("Delete all." +" Number: " + this.state.textValue)
  }
  
  

  render(){
    return (
      <View style={{flex:1}}>

        <Header title={'Phone'} backgroundColor={this.state.backgroundColor1}></Header>

        <View style={{flex:1, flexDirection:"column" }}>
          <View style={styles.number,{flex: 3,flexDirection:"row",justifyContent:"center"}}>
              <View style={styles.number,{flex: 5,justifyContent:"center"}}>
                <Text style={styles.TextNumber}>{this.state.textValue}</Text>
              </View>
              <View style={styles.number,{flex: 1,justifyContent:"center"}}>
                <TouchableOpacity onLongPress={(e) => this.deleteAll()} onPress={(e) => this.delete()} style={{justifyContent:"center"}}>
                  <Text style={{color:this.state.deleteButton}}>⌫</Text>    
                </TouchableOpacity>
              </View>
          </View>
          
          <View style={styles.number,{flex:8,  justifyContent:"center",alignContent:"stretch"}}>
            <View style={{flexDirection:"row",flex:1, justifyContent:"center",alignContent:"stretch"}}>
              <TouchableOpacity title="Change Text" onPress={(e) => this.AddNumber(this.state.num1)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num1}</Text>
                <Text style={styles.btnsubTextNumber}>0_0</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num2)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num2}</Text>
                <Text style={styles.btnsubTextNumber}>A B C</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num3)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num3}</Text>
                <Text style={styles.btnsubTextNumber}>D E F</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",flex:1, justifyContent:"center",alignContent:"stretch"}}>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num4)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num4}</Text>
                <Text style={styles.btnsubTextNumber}>G H I</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num5)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num5}</Text>
                <Text style={styles.btnsubTextNumber}>J K L</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num6)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num6}</Text>
                <Text style={styles.btnsubTextNumber}>M N O</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",flex:1, justifyContent:"center",alignContent:"stretch"}}>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num7)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num7}</Text>
                <Text style={styles.btnsubTextNumber}>P Q R S</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num8)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num8}</Text>
                <Text style={styles.btnsubTextNumber}>T U V</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.num9)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num9}</Text>
                <Text style={styles.btnsubTextNumber}>W X Y Z</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:"row",flex:1, justifyContent:"center",alignContent:"stretch"}}>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.numStar)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.numStar}</Text>
              </TouchableOpacity>
              <TouchableOpacity onLongPress={(e) => this.AddPlus(this.state.numPlus)} onPress={(e) => this.AddNumber(this.state.num0)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.num0}</Text>
                <Text style={styles.btnsubTextNumber}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={(e) => this.AddNumber(this.state.numHesh)} style={styles.buttonNumber}>
                <Text style={styles.btnTextNumber}>{this.state.numHesh}</Text>
              </TouchableOpacity>
            </View>    
          </View>
          <View style={{flex:2, justifyContent:"center",alignItems:"center" }}>
            <TouchableOpacity style={{ width: 60,paddingLeft: 15,paddingRight: 15,shadowColor: "#000",shadowOffset: {width:0, height:2},shadowOpacity: 0.2,elevation: 2,borderRadius: 20,backgroundColor: this.state.backgroundColor1 ,justifyContent:"center",alignItems:"center"}}  onPress={() => this.selectionOnPress("ADVANCED")} >
              <Image style={styles.imagestyle} source={require('./assets/52971-200.png')}/>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}
  


const styles = StyleSheet.create({
  number:{
    borderColor: "#DCDCDC",
    borderWidth: 1,
    width: 20
  },
  buttonCall:{
    
  },
  btnText: {
    color: "white",
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
  },
  buttonNumber:{
    flex:1,
    justifyContent:"center",
    color:"#000",
    borderColor: "#DCDCDC",
    borderWidth: 1,
  },
  btnTextNumber:{
    color: "#000",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center"
  },
  btnsubTextNumber:{
    color: "#808080",
    fontSize: 10,
    justifyContent: "center",
    textAlign: "center"
  },
  TextNumber:{
    color: "#000",
    fontSize: 30,
    justifyContent: "center",
    textAlign: "center"
  },
  imagestyle:{
    height:20,
    width:20,
    padding: 10,
    margin: 5
  }
});
