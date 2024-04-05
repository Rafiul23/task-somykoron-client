import { createContext, useEffect, useState } from "react";


export const MessageContext = createContext(null);

const MessageProvider = ({children}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('messages.json')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])


    const messageInfo = {
        messages,
        setMessages
    }

    return (
        <MessageContext.Provider value={messageInfo}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageProvider;