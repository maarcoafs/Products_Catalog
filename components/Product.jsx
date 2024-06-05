import { Image, Text, View } from "react-native";
import { Button, Card } from '@rneui/themed';

export function Product({item}) {
    return (
        <Card>
            <Card.Title>{item.title}</Card.Title>
            <Card.Divider />
            <View style={{flexDirection: 'row'}}>
                <Image 
                    source={{uri: item.image}} 
                    width={80} 
                    height={80} 
                />
                <View style={{paddingLeft: 20}}>
                    <Text style={{fontSize: 20}}>{item.price}</Text>
                    <Button>
                        Add cart
                    </Button>
                </View>
            </View>
        </Card>
    );
}