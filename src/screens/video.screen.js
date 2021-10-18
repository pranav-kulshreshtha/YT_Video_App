import React, {useState} from "react";
import {View, StyleSheet, Platform} from "react-native";
import { WebView } from "react-native-webview";
import { LiveChatScreen } from "./livechat.screen";

export const VideoScreen = ({link}) => {
    return (
            <View style={{flex:1}}>
            <WebView
                style={{flex:1, zIndex: 1}}
                mediaPlaybackRequiresUserAction={((Platform.OS !== 'android') || (Platform.Version >= 17)) ? false : undefined}
                source={{uri:link}}
            />
            <View style={{position:'absolute', height:'100%',width:'100%',
                    zIndex:2, backgroundColor:'rgba(255,255,255,0.0)'}}></View>
            <View style={styles.chatScreen}><LiveChatScreen /></View>
            </View>
            
    );
}

const styles = StyleSheet.create({
    chatScreen:{
        position:'absolute',
        top:15,
        bottom:15,
        left:10,
    }
});