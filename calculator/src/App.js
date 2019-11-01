
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import Display from './components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values:[0,0],
  currentIndex: 0,
}
export default class App extends Component {
  state={ ...initialState }

  addDigito = n => {
    if (n === '.' && this.state.displayValue.includes('.')){
      return
    }
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false})

    if (n !== '.'){
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.currentIndex] = newValue
      this.setState({ values })
    }
  }

  clearMemory = () => {
    this.setState({ ...initialState })
  }
  
  setOperation = operation => {

  }
  
  render() {
    return(
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Button label='AC' onClick={this.clearMemory} triple/>
          <Button label='/' onClick={this.setOperation} operation/>
          <Button label='7' onClick={this.addDigito}/>
          <Button label='8' onClick={this.addDigito}/>
          <Button label='9' onClick={this.addDigito}/>
          <Button label='*' onClick={this.setOperation} operation/>
          <Button label='4' onClick={this.addDigito}/>
          <Button label='5' onClick={this.addDigito}/>
          <Button label='6' onClick={this.addDigito}/>
          <Button label='-' onClick={this.setOperation} operation/>
          <Button label='1' onClick={this.addDigito}/>
          <Button label='2' onClick={this.addDigito}/>
          <Button label='3' onClick={this.addDigito}/>
          <Button label='+' onClick={this.setOperation} operation/>
          <Button label='0' onClick={this.addDigito} double/>
          <Button label='.' onClick={this.addDigito}/>
          <Button label='=' onClick={this.setOperation} operation/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
