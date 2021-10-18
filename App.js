import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VideoScreen } from './src/screens/video.screen';
import { LiveChatContextProvider } from './src/features/LiveChat/livechat.context';

const videoLink = "https://www.youtube.com/embed/rFYgGG2Rgd0?autoplay=1&loop=1&mute=1"

export default function App() {
  return (
    <LiveChatContextProvider>
      <VideoScreen link={videoLink} />
    </LiveChatContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
