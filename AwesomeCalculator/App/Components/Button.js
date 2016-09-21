
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';


class Button extends Component {

  _onPressButton(){
    var input = this.props.Textvalue
    //alert(number)
    this.props.myFunc(input)

  }
  render(){
    return(
      <TouchableHighlight style={{flex : 1,marginTop : 5}} underlayColor = "white" onPress={this._onPressButton.bind(this,this.props.Textvalue)}>
      <Text style={styles.CalculatorNumericButtonText}>{this.props.Textvalue}</Text>
      </TouchableHighlight>


    );
  }


}

const styles = StyleSheet.create({


  CalculatorNumericButtonText:{
    color : 'white',
    fontSize : 24,
    //padding : 10,
    flex : 1,
    textAlign : 'center',
    marginTop : 20

  }
});


Button.propTypes = {
  myFunc: React.PropTypes.func,
};

export default Button
