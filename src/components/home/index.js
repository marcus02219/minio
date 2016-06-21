'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import { View, Text, DeviceEventEmitter, Dimensions, Image, StyleSheet} from 'react-native';
import {Container, Header, Title, Button, Icon, Badge, Footer, Content,InputGroup, Input, List, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import {openDrawer} from '../../actions/drawer';
import {replaceRoute} from '../../actions/route';
import styles from './styles';
import theme from '../themes/base-theme';
class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
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
                    <Text style={styles.text}>Welcome!</Text>
                    <Text style={styles.text}>Native Starter Free Version!</Text>

                    <Button style={styles.text} onPress={() => this.replaceRoute('login')}>
                        Logout
                    </Button>
                </Content>
                <View style={styles.footer}>
                  <Button transparent>
                    <Icon name="ios-person" />
                  </Button>
                  <Button transparent>
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
