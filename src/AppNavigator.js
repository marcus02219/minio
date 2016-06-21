/**
 * Created by kylefang on 4/28/16.
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash/core';
import {Drawer} from 'native-base';
import {BackAndroid} from 'react-native';
import {closeDrawer} from './actions/drawer';
import Navigator from 'Navigator';

import Home from './components/home/';
import Login from './components/login/';
import SideBar from './components/sideBar';
import BlankPage from './components/blankPage/';
import Signup from './components/signup/';
import Setting from './components/setting/';
export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        var currentState = state;

        if(currentState){
            while (currentState.children){
                currentState = currentState.children[currentState.index]
            }
        }
        return defaultReducer(state, action);
    }
};

const drawerStyle  = { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};

class AppNavigator extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;
        this.props.store.subscribe(() => {
            console.log("store changed", this.props.store.getState());
            if(this.props.store.getState().drawer.drawerState == 'opened')
                this.openDrawer();

            if(this.props.store.getState().drawer.drawerState == 'closed')
                this._drawer.close()
        });

        BackAndroid.addEventListener('hardwareBackPress', () => {
            var routes = this._navigator.getCurrentRoutes();

            if(routes[routes.length - 1].id == 'home' || routes[routes.length - 1].id == 'login') {
                return false;
            }
            else {
                this.popRoute();
                return true;
            }
        });
    }

    popRoute() {
        this.props.popRoute();
    }

    openDrawer() {
      console.log('open')
        this._drawer.open();
    }

    closeDrawer() {
        if(this.props.store.getState().drawer.drawerState == 'opened') {
            this._drawer.close();
            this.props.closeDrawer();
        }
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={ <SideBar navigator={this._navigator} /> }
                tapToClose={true}
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}>
                <Navigator
                    ref={(ref) => this._navigator = ref}
                    configureScene={(route) => {
                        return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    initialRoute={{id: 'login'}}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'login':
                return <Login navigator={navigator} />;
            case 'home':
                return <Home navigator={navigator} />;
            case 'blankPage':
                return <BlankPage navigator={navigator} />;
            case 'signup':
                return <Signup navigator={navigator} />;
            case 'setting':
                return <Setting navigator={navigator} />;
            default :
                return <Login navigator={navigator}  />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}

export default connect(mapStateToProps, bindAction) (AppNavigator);
