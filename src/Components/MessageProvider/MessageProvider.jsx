import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const MessageContext = createContext(null);

const MessageProvider = ({children}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetch('messages.json')
            .then(res => res.json())
            .then(data => setMessages(data))
    }, [])

    const handleDeleteMessage = (_id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            const remaining = messages.filter(message => message._id !== _id);

            setMessages([...remaining]);

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    const messageInfo = {
        messages,
        setMessages,
        handleDeleteMessage
    }

    return (
        <MessageContext.Provider value={messageInfo}>
            {children}
        </MessageContext.Provider>
    );
};

export default MessageProvider;