
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import Display from './components/Display'

export default class App extends Component {
  state={
    displayValue: '0'
  }

  addDigito = n => {this.setState({displayValue: this.state.displayValue + '' + n})}
  clearMemory = () => {this.setState({displayValue: '0'})}
  setOperation = operation => {}
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
