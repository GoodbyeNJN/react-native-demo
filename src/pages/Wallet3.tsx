import React from "react";
import {
    Button,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { withMappedNavigationParams } from "react-navigation-props-mapper";
import { NavigationStackOptions, NavigationStackScreenProps } from "react-navigation-stack";
import { NavigationBar } from "beeshell";

interface NavigationParams {
    name: string;
}

type WalletProps = NavigationStackScreenProps<NavigationParams>;

class Wallet3 extends React.Component<WalletProps> {
    static navigationOptions = ({
        navigation,
    }: NavigationStackScreenProps): NavigationStackOptions => {
        const canGoBack = navigation.isFirstRouteInParent();
        if (canGoBack) {
            return {
                header: () => (
                        <NavigationBar
                            title={navigation.getParam("name", "Wallet3")}
                            backLabelText=""
                            backLabelIcon={<></>}
                            onPressBack={() => {
                                navigation.goBack();
                            }}
                        />
                    ),
            };
        } else {
            return {
                header: () => (
                        <NavigationBar
                            title={navigation.getParam("name", "Wallet3")}
                            backLabelText=""
                            onPressBack={() => {
                                navigation.goBack();
                            }}
                        />
                    ),
            };
        }
    };

    render() {
        return (
            <View>
                <Text>I am Wallet3 page.</Text>
                <Button
                    title="Push"
                    onPress={() => {
                        this.props.navigation.push("Wallet1");
                    }}
                />
                <Button
                    title="Back"
                    onPress={() => {
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default withMappedNavigationParams()(Wallet3);
