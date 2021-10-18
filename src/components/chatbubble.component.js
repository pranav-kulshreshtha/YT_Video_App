import React, {useEffect, useState, useContext} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { LiveChatContext } from "../features/LiveChat/livechat.context";

export const ChatBubble = ({message}) => {
    const {display} = useContext(LiveChatContext);
    const [visible, setVisible] = useState(display);

    useEffect(() => {
        setVisible(display);
    }, [display])

    const bubble = (<View style={styles.textBubble}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={styles.avatar} source={require("../../assets/my_avatar.jpg")}/>
                            <Text style={{marginHorizontal:10, fontWeight:'bold'}}>{message.user.name}</Text>
                            <Text style={{marginHorizontal:10}}>{message.text}</Text>
                        </View>
                    </View>);

    return (
        visible ?
        bubble
        : null
    );
};

const styles = StyleSheet.create({
    textBubble:{
        backgroundColor:'rgb(255,255,255)',
        padding:10,
    },
    avatar:{
        height:30,
        width:30,
        borderRadius:100,
    }
});