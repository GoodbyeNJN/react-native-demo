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

const Me: React.FC = () => (
        <View>
            <Text>I am Me page.</Text>
        </View>
    );

export default withMappedNavigationParams()(Me);
