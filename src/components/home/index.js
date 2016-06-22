'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View, Text, DeviceEventEmitter, Dimensions, Image, StyleSheet, Modal, Switch} from 'react-native';
import {Container, Header, Title, Button, Icon, Badge, Footer, Content,InputGroup, Input, List, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {openDrawer} from '../../actions/drawer';
import {replaceRoute} from '../../actions/route';
import styles from './styles';
import theme from '../themes/base-theme';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        animationType: 'none',
        modalVisible: false,
        transparent: false,
      };
  }

  replaceRoute(route) {
      this.props.replaceRoute(route);
  }

  componentDidMount() {
    this.setState({sign_modal: this._modal});
    // this._modal.open();
  }
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _setAnimationType(type) {
    this.setState({animationType: type});
  }

  _toggleTransparent() {
    this.setState({transparent: !this.state.transparent});
  }
    render() {
      var modalBackgroundStyle = {
        backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
      };
      var innerContainerTransparentStyle = this.state.transparent
        ? {backgroundColor: '#fff', padding: 20}
        : null;
      var activeButtonStyle = {
        backgroundColor: '#ddd'
      };

        return (
            <Container theme={theme}>
              <Image source={require('../../images/bg.jpg')} style={styles.shadow}>
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Home</Text>

                  <Button transparent onPress={this.props.openDrawer} style={styles.headerButton}>
                      <Icon name="ios-menu" />
                  </Button>
                </View>

                <Content style={{flex: 10}}>
                  <View>
                    <Modal
                      animationType={'slide'}
                      transparent={false}
                      visible={this.state.modalVisible}
                      onRequestClose={() => {this._setModalVisible(false)}}
                      >
                      <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                          <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
                          <Button
                            onPress={this._setModalVisible.bind(this, false)}
                            style={styles.modalButton}>
                            Close
                          </Button>
                        </View>
                      </View>
                    </Modal>
                  </View>
                </Content>

                <View style={styles.footer}>
                  <Button transparent onPress={() => this.replaceRoute('login')}>
                    <Icon name="ios-person" />
                  </Button>
                  <Button transparent onPress={this._setModalVisible.bind(this, true)}>
                    <Icon name="ios-create" />
                  </Button>
                  <Button transparent >
                    <Icon name="ios-camera" />
                  </Button>
                  <Button transparent >
                    <Icon name="ios-heart" />
                  </Button>
                </View>
              </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
