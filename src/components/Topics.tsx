import React from "react";
import { Button, Text, View } from "react-native";

import { AppState } from "@/store";
import { FetchState } from "@/store/fetch/types";

export interface Props {
    list: FetchState;
    fetchData: Function;
}

const Topics: React.FC<Props> = ({ list, fetchData }) => {
    console.log("list: ", list);

    return (
        <View>
            {list.isFetching ? <Text>Loading...</Text> : <Text>Loaded</Text>}
            {!list.isFetching && list.data ? (
                list.data.map((value, index) => (
                    <Text key={index.toString()}>
                        `${index}: ${JSON.stringify(value)}`
                    </Text>
                ))
            ) : list.error ? (
                <Text>{JSON.stringify(list.error)}</Text>
            ) : (
                <Text>No topics</Text>
            )}
            <Button
                title="获取数据"
                onPress={() => {
                    fetchData();
                }}
            />
        </View>
    );
};

export default Topics;
