import React, {createContext, useState, useEffect} from "react";

export const LiveChatContext = createContext();

export const LiveChatContextProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [display, setDisplay] = useState(true);

    const showChat = () => {
        setDisplay(true);
    }

    const hideChat = () => {
        setDisplay(false);
    }
    

    useEffect(() => {
        setMessages([
          {
            _id: 1,
            text: 'When will it start?',
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'User 101',
              avatar: '../../assets/my_avatar.jpg',
            },
          },
          {
            _id: 2,
            text: 'I am waiting',
            createdAt: new Date(),
            user: {
              _id: 3,
              name: 'Captain',
              avatar: '../../assets/my_avatar.jpg',
            },
          },
          {
            _id: 3,
            text: 'It is going to be fun',
            createdAt: new Date(),
            user: {
              _id: 4,
              name: 'Knight',
              avatar: '../../assets/my_avatar.jpg',
            },
          },
        ])
      }, [])

    return (
        <LiveChatContext.Provider value={{
            messages, 
            display,
            showChat,
            hideChat,
            setMessages,
            }}>
            {children}
        </LiveChatContext.Provider>
    );
}