import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import HttpExample from './FetchList';

export default class App extends Component{

  constructor(props){
    super(props);
    this._fetchStory = this._fetchStory.bind(this);
  }

  _fetchStory() {
    fetch( 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty');

  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableHighlight onPress={this._fetchStory}>
        <Text style={styles.welcome}>
          Lets start!
        </Text>
      </TouchableHighlight>
      <HttpExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
