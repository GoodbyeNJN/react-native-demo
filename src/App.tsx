import React from "react";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { NavigationBar } from "beeshell";
import { Discovery, Market, Me, Wallet1, Wallet2, Wallet3 } from "@/pages";

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octions from "react-native-vector-icons/Octicons";

import { Provider } from "react-redux";
import store from "@/store";

const App: React.FC = () => {
    const TabNavigatorContainer = createBottomTabNavigator(
        {
            Wallet: {
                screen: Wallet1,
                navigationOptions: {
                    tabBarLabel: "钱包",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Entypo name="wallet" size={26} color={tintColor} />
                    ),
                },
            },
            Market: {
                screen: Market,
                navigationOptions: {
                    tabBarLabel: "行情",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Ionicons name="md-trending-up" size={30} color={tintColor} />
                    ),
                },
            },
            Discovery: {
                screen: Discovery,
                navigationOptions: {
                    tabBarLabel: "发现",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <MaterialIcons name="explore" size={26} color={tintColor} />
                    ),
                },
            },
            Me: {
                screen: Me,
                navigationOptions: {
                    tabBarLabel: "我的",
                    tabBarIcon: ({ focused, tintColor }) => (
                        <Octions name="person" size={24} color={tintColor} />
                    ),
                },
            },
        },
        // {
        // defaultNavigationOptions: ({ navigation }) => {
        //     return {
        //         tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //             const { routeName } = navigation.state;
        //             let iconName = "ios-options";
        //             return <Ionicons name={iconName} size={26} color={tintColor} />;
        //         },
        //     };
        // },
        // tabBarComponent: (props) => {
        //     return <BottomTabBar {...props} style={{ borderTopColor: "blue" }} />;
        // },
        // },
    );

    const StackNavigator = createStackNavigator(
        {
            TabNavigatorContainer,
            Wallet2,
            Wallet3,
        },
        {
            defaultNavigationOptions: {
                header: props => (
                    <NavigationBar
                        backLabelIcon={
                            // <Image source={Icon.IconGoBack} style={{ width: 20, height: 20 }} />
                            <></>
                        }
                        backLabelText=""
                        // onPressBack={() => {
                        //     props.navigation.goBack();
                        // }}
                    />
                ),
            },
        },
    );

    const AppContainer = createAppContainer(StackNavigator);

    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};

export default App;
