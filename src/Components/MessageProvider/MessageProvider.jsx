import { createContext, useState } from "react";


export const MessageContext = createContext(null);

const MessageProvider = ({children}) => {

    const [messages, setMessages] = useState([]);

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