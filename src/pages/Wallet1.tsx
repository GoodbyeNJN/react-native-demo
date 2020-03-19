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

class Wallet1 extends React.Component<WalletProps> {
    static navigationOptions: NavigationStackOptions = {
        title: "Wallet1",
    };

    render() {
        return (
            <View>
                <Text>I am Wallet1 page.</Text>
                <Button
                    title="Push"
                    onPress={() => {
                        this.props.navigation.push("Wallet2", { name: "Wallet2 from Wallet1" });
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

export default withMappedNavigationParams()(Wallet1);
