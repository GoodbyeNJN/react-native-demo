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

class Wallet2 extends React.Component<WalletProps> {
    // static navigationOptions = ({
    //     navigation,
    //     name,
    // }: NavigationStackScreenProps & NavigationParams): NavigationStackOptions => {
    //     return { title: name };
    // };
    static navigationOptions = ({
        navigation,
    }: NavigationStackScreenProps): NavigationStackOptions => {
        const canGoBack = navigation.isFirstRouteInParent();
        if (canGoBack) {
            return {
                header: () => (
                    <NavigationBar
                        title={navigation.getParam("name", "Wallet2 Title")}
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
                        title={navigation.getParam("name", "Wallet2 Title")}
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
        const { navigation } = this.props;

        return (
            <View>
                <Text>I am Wallet2 page.</Text>
                <Button
                    title="Push"
                    onPress={() => {
                        navigation.push("Wallet3");
                    }}
                />
                <Button
                    title="Back"
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

export default withMappedNavigationParams()(Wallet2);
