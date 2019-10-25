import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './components/List';
import Slider from './components/Slider';
import Header from './components/Header';
import Menu from './components/Menu';

import Search from './components/Search';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleSideMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({isOpen});
    }

    render() {
        return (
            <View style={styles.wrapper}>
             <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <View style={styles.wrapper}>
                        <Header navigator={this.props.navigator} toggleSideMenu={this.toggleSideMenu.bind(this)} />
                        <Slider />
                        <List navigator={this.props.navigator} />
                    </View>

                </SideMenu>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'black',
    }
});