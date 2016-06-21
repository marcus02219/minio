'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';

import {Container, Header, Content, Title, Button, Icon } from 'native-base';
import {openDrawer} from '../../actions/drawer';
import {popRoute} from '../../actions/route';
import { Form, InputField,
        Separator, SwitchField, LinkField ,
        PickerField, DatePickerField
      } from 'react-native-form-generator';

class Signup extends Component {

    popRoute() {
        this.props.popRoute();
    }
    handleFormChange(formData){
    /*
    formData will contain all the values of the form,
    in this example.

    formData = {
      first_name:"",
      last_name:"",
      gender: '',
      birthday: Date,
      has_accepted_conditions: bool
    }
     */

   }
   handleFormFocus(formData){

   }
   openTermsAndConditionsURL(formData){

   }
    render() {
        return (
            <Container style={{backgroundColor: '#565051'}}>
                <Header style={{backgroundColor: '#322A2A'}} foregroundColor="#fff">
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>Signup Page</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>
                <Content>
                  <Form
                    ref='registrationForm'
                    onFocus={this.handleFormFocus.bind(this)}
                    onChange={this.handleFormChange.bind(this)}
                    label="Personal Information">
                    <InputField ref='first_name' label='First Name' placeholder='First Name'/>
                    <InputField ref='last_name' placeholder='Last Name'/>
                    <PickerField ref='gender' placeholder='Gender'
                      options={{
                        male: 'Male',
                        female: 'Female'
                      }}/>
                    <DatePickerField ref='birthday'
                      minimumDate={new Date('1/1/1900')}
                      maximumDate={new Date()} mode='date' placeholder='Birthday'/>
                    <Separator label='Terms & Conditions'/>
                    <LinkField label='Read terms & conditions' onPress={this.openTermsAndConditionsURL.bind(this)}/>
                    <SwitchField label='I accept Terms & Conditions' ref="has_accepted_conditions" helpText='Please read carefully the terms & conditions'/>
                  </Form>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(Signup);
