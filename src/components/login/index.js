
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Dimensions, Image, Keyboard, AlertIOS} from 'react-native';

import {Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';
import {replaceRoute} from '../../actions/route';
import theme from '../themes/base-theme';
import styles from './styles';


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }
    componentWillMount () {
        Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this))
        Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this))
    }

    keyboardWillShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
        this.setState({scroll: true})
    }

    keyboardWillHide (e) {
        this.setState({scroll: false})
    }
    handleChangeText(e){
      console.log(e)
    }
    replaceRoute(route) {
        console.log(this.state.email);
        if(this.state.email=="" || this.state.password==""){
          AlertIOS.alert(
              "Login Error",
              "Please input your info"
          )
          return false;
        }
        fetch("http://localhost:3000/api/v1/accounts/sign_in",
              {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                                      email: this.state.email,
                                      password: this.state.password
                                    })
              }
        )
        .then((response) => response.json())
        .then((responseData) => {
          console.log(responseData)
          if(responseData.faild){
            AlertIOS.alert(
                "Login Error",
                responseData.faild
            )
          }else{
            this.props.replaceRoute(route);
          }

        })
        .done((responseData) => {
          console.log(responseData)
        });

    }

    render() {
        return (
            <Container theme={theme}>
                <View style={styles.container}>
                    <Content>
                        <Image source={require('../../images/shadow.png')} style={styles.shadow}>
                            <View style={styles.bg}>
                                <InputGroup key={'a1'} style={{marginBottom: 20}}>
                                    <Icon name="ios-person" />
                                    <Input placeholder="EMAIL"
                                      name = "email"
                                      onChangeText={(text) => this.setState({email: text})}                                      
                                    />
                                </InputGroup>
                                <InputGroup key={'a2'} style={{marginBottom: 10}}>
                                    <Icon name="ios-unlock-outline" />
                                    <Input
                                        placeholder="PASSWORD"
                                        name = "password"
                                        onChangeText={(text) => this.setState({password: text})}
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                                <Button style={{marginTop: 20, alignSelf: 'center'}} textStyle={{color: '#fff'}} onPress={() => this.replaceRoute('home')}>
                                    Login
                                </Button>
                            </View>
                        </Image>
                    </Content>
                </View>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindActions)(Login);
