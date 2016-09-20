

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

//var Button = require('react-native-material-button');

const window = Dimensions.get('window');

import Button from './Components/Button'
class MainScreen extends Component {

  constructor(){
    super();
    this.state={
      CalculatorDisplayValue : '0'
    }
  }


  handleChildFunc(number){
    //alert(number)
    if(this.state.CalculatorDisplayValue > 0){
      var oldValue = this.state.CalculatorDisplayValue

      var newValue = oldValue * 10  + Number(number)
      //alert(newValue)

      this.setState({CalculatorDisplayValue : newValue})


    }else{
    this.setState({CalculatorDisplayValue : number})
    }
}



  render() {
    return (


        <View style={styles.CalculatorWrapper}>
          <View style={styles.CalculatorDisplay}>
            <Text style={{
              fontSize : 60,
              marginTop : 60,
              textAlign : 'right'
            }}>{this.state.CalculatorDisplayValue}</Text>
          </View>
          <View style={styles.CalculatorButtonsWrapper}>


            <View style={{flexDirection : 'column',flex : 4}}>
            <View style={styles.CalculatorNumericButtonsWrapper}>
            <Button Textvalue="7" operantValue={1} myFunc={this.handleChildFunc.bind(this)} {...this.props}/>
            <Button Textvalue="8" operantValue={2} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="9"  operantValue={3} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            </View>
            <View style={styles.CalculatorNumericButtonsWrapper}>
            <Button Textvalue="4" operantValue={1} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="5" operantValue={2}  myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="6"  operantValue={3} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            </View>

            <View style={styles.CalculatorNumericButtonsWrapper}>
            <Button Textvalue="1" operantValue={1} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="2" operantValue={2}  myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="3"  operantValue={3} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            </View>

            <View style={styles.CalculatorNumericButtonsWrapper}>
            <Button Textvalue="." operantValue={1} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="0" operantValue={2}  myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="="  operantValue={3} myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            </View>


            </View>






          <View style={styles.CalculatorOperationsButtonsWrapper}>
            <Button Textvalue="DEL"  operantValue={3} {...this.props} />
            <Button Textvalue="/"  operantValue={3} {...this.props} />
            <Button Textvalue="x"  operantValue={3} {...this.props} />
            <Button Textvalue="-"  operantValue={3} {...this.props} />
            <Button Textvalue="+"  operantValue={3} {...this.props} />

            </View>
          </View>


        </View>


    );
  }
}

const styles = StyleSheet.create({

  CalculatorWrapper : {
    flex: 1,
    flexDirection : 'column',
    backgroundColor : 'green',
    height : window.height-10,
    margin : 5

  },
  CalculatorDisplay : {
    flex : 1,
    backgroundColor :'white'
  },
  CalculatorButtonsWrapper : {
    flex : 2,
    backgroundColor : '#263238',
    flexDirection : 'row'
  },
  CalculatorNumericButtonsWrapper:{
    flex : 4,
    //padding : 30,
    flexDirection : 'row',
    //alignItems : 'center',
    justifyContent : 'center'
  },
  CalculatorNumericButtonText:{
    color : 'white',
    fontSize : 24,
    //padding : 10,
    flex : 1,
    textAlign : 'center',
    marginTop : 20

  },
  CalculatorOperationsButtonsWrapper:{
    flex : 1,
    backgroundColor : '#757575',
    padding : 10,
    alignItems : "stretch"
  }
});

export default MainScreen
