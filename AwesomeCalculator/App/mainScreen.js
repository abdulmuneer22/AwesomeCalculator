

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
      CalculatorDisplayValue : '0',
      a : '',
      b : ''
    }

    
  }


  handleChildFunc(input){
    

    switch(input){
      case 'DEL':{
      this.setState({CalculatorDisplayValue : 0})
      break;
      }

      case '=':{
        


        // Search for the operator 
          // displayValue => Current value in  Display
          var displayValue = this.state.CalculatorDisplayValue 
          
          try{
          if(displayValue.indexOf('+') > 0){var op = '+'}
          }catch(error){
            //alert(error)
            this.setState({CalculatorDisplayValue : '0'})
          }

          try{
          if(displayValue.indexOf('-') > 0){var op = '-'}
          }catch(error){
            //alert(error)
            this.setState({CalculatorDisplayValue : '0'})
          }

          try{
          if(displayValue.indexOf('x') > 0){var op = 'x'}
          }catch(error){
            //alert(error)
            this.setState({CalculatorDisplayValue : '0'})
        }

          try{
          if(displayValue.indexOf('÷') > 0){var op = '÷'}
          }catch(error){
            //alert(error)
            this.setState({CalculatorDisplayValue : '0'})
          }

          
          
          

         
          
          
            
          

        //alert("=")
        var a = ''
        var b = ''
        
        try{
        var displayValueFields = displayValue.split(op)
        var a = displayValueFields[0]
        var b = displayValueFields[1]
        }catch(error){
          this.setState({CalculatorDisplayValue : '0'})
          //alert(error)
        }
        switch(op){
          case '+':
          var a = Number(a)
          var b = Number(b)
          var result = a + b
          break;

          case '-':
          var a = Number(a)
          var b = Number(b)
          var result = a - b
          break;

          case 'x':
          var a = Number(a)
          var b = Number(b)
          var result = a * b
          break;

          case '÷':
          var a = Number(a)
          var b = Number(b)
          var result = a / b
          break;
            
        }

        //alert(result)
        this.setState({CalculatorDisplayValue : result})
        
        break;
      }

      default : {
                  this.setState({CalculatorDisplayValue : input})
                  var OldValue = this.state.CalculatorDisplayValue


                  if(OldValue != 0 && OldValue !=undefined){
                  var Input = input
                  var ValueOnDisplay = OldValue + "" + Input
                  //alert(ValueOnDisplay)      
                  this.setState({CalculatorDisplayValue : ValueOnDisplay})

                  }
      }

    }
    

  }


  _handleChildFunc(input){
    
    switch(input){
      case '.':
        //alert("Pressed .")
        var oldValue = this.state.CalculatorDisplayValue
        var newValue = oldValue + input
        this.setState({CalculatorDisplayValue : newValue})
        break;
        
      case '=':
        var _b = this.state.CalculatorDisplayValue
        this.setState({b:_b})
        var _a = Number(this.state.a)
        var _b = Number(this.state.b)
        var answer = _a+_b
        this.setState({CalculatorDisplayValue : answer})
        //alert(_a + " " +_b)
        
        break;

      case '+':

        var _a = this.state.CalculatorDisplayValue
        this.setState({a:_a})

        this.setState({CalculatorDisplayValue : ''})
        break;

      case 'DEL':
        this.setState({
          CalculatorDisplayValue : 0,
          a: 0,
          b : 0
        })
        break;


      
      default : 
                if(this.state.CalculatorDisplayValue > 0){
                var oldValue = this.state.CalculatorDisplayValue

                var newValue = oldValue.append+newValue
                //alert(newValue)

                this.setState({CalculatorDisplayValue : newValue})


                }else{
                this.setState({CalculatorDisplayValue : input})
                }
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
            <Text>{this.state.a}</Text>
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
            <Button Textvalue="."   myFunc={this.handleChildFunc.bind(this)} {...this.props} />            
            <Button Textvalue="0"   myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="="   myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            
            </View>


            </View>






          <View style={styles.CalculatorOperationsButtonsWrapper}>
            <Button Textvalue="DEL" myFunc={this.handleChildFunc.bind(this)}{...this.props} />
            <Button Textvalue="÷"   myFunc={this.handleChildFunc.bind(this)}{...this.props} />
            <Button Textvalue="x"   myFunc={this.handleChildFunc.bind(this)}{...this.props} />
            <Button Textvalue="-"   myFunc={this.handleChildFunc.bind(this)} {...this.props} />
            <Button Textvalue="+"   myFunc={this.handleChildFunc.bind(this)}{...this.props} />

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
    //margin : 5

  },
  CalculatorDisplay : {
    flex : 1,
    backgroundColor :'white',
    padding : 10
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
    backgroundColor : '#636363',
    padding : 10,
    alignItems : "stretch"
  }
});

export default MainScreen
