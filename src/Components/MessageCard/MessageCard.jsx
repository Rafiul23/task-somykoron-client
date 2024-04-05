import { useContext } from "react";
import { MessageContext } from "../MessageProvider/MessageProvider";
import {motion} from 'framer-motion';

const MessageCard = ({messageData}) => {

    const {handleDeleteMessage} = useContext(MessageContext);

    const {_id, name, message} = messageData;

    return (
        <motion.div 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className="card w-full bg-base-200 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-blue-900">{name}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <motion.button 
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{
                         delay: 0.3,
                         x: { type: 'spring', stiffness: 60 },
                         opacity: { duration: 1 },
                         ease: 'easeIn',
                         duration: 1
                     }}
                    className="btn bg-blue-900 text-white" onClick={()=> handleDeleteMessage(_id)}
                    >Delete Message</motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default MessageCard;