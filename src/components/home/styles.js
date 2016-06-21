/* @flow */
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  },
  shadow: {
      flex: 1,
      width: null,
      height: null,
      backgroundColor: 'transparent'
  },
  headerTitle:{
    flex: 1,
    flexDirection: 'row',
    fontSize: 14,
    paddingLeft: 20,
    color: '#fff'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#6E5BAA',
    paddingTop: 15,
    paddingBottom: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: "#fff"
  },
  headerButton:{
    paddingTop: 3,
    paddingBottom: 3,
    marginTop: 0,
    marginBottom: 0
  },
  text: {
      paddingBottom: 20,
      alignSelf: 'center',
  },
  footer: {
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderTopColor: "#fff",
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    flexDirection:'row',
    justifyContent: 'center',
    height:60,
    alignItems:'center',
  }
});
