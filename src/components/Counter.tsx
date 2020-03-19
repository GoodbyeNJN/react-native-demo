import React from "react";
import { Button, Text, View } from "react-native";

import { CounterState } from "@/store/counter/types";

export interface Props {
    counter: CounterState;
    clear: Function;
    increase: Function;
    decrease: Function;
    increaseAsync: Function;
}

const Counter: React.FC<Props> = ({ counter, clear, increase, decrease, increaseAsync }) => (
    // console.log("counter: ", counter);
    <View>
        <Text>{`计数器：${counter}`}</Text>
        <Button
            title="加"
            onPress={() => {
                increase();
            }}
        />
        <Button
            title="减"
            onPress={() => {
                decrease();
            }}
        />
        <Button
            title="清空"
            onPress={() => {
                clear();
            }}
        />
        <Button
            title="异步加"
            onPress={() => {
                increaseAsync();
            }}
        />
    </View>
);

export default Counter;
