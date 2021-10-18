import React, {useContext, useCallback, useEffect} from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { LiveChatContext } from "../features/LiveChat/livechat.context";
import { ChatBubble } from "../components/chatbubble.component";

export const LiveChatScreen = () => {
    const {messages, display, showChat, hideChat, setMessages} = useContext(LiveChatContext);

    useEffect(() => {
        setTimeout(() => {
            hideChat();
        }, 6000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            hideChat();
        }, 10000);
    }, [messages]);

    const customBubble = (item) => {
        return <ChatBubble message={item.currentMessage} />
    }

    const addMessage = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        showChat();
      }, [])

    return (
        <GiftedChat 
            messages={messages}
            messagesContainerStyle={styles.messageContainer}
            showAvatarForEveryMessage={true}
            renderBubble={customBubble}
            scrollToBottom={true}
            alwaysShowSend={true}
            onSend={addMessage}
            user={{
                _id: 1,
                name: "You",
            }}
        />
    );
}

const styles = StyleSheet.create({
    messageContainer:{
        backgroundColor:'rgba(255,255,255,0.0)',
        width:400,
    },
});