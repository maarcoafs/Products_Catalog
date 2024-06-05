import { Text } from "react-native";

export function Product({item}) {
    return (
        <Text>{item.title}</Text>
    );
}