import { useContext } from "react";
import { MessageContext } from "../MessageProvider/MessageProvider";


const MessageCard = ({messageData}) => {

    const {handleDeleteMessage} = useContext(MessageContext);

    const {_id, name, message} = messageData;

    return (
        <div className="card w-full bg-base-200 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-blue-900">{name}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-blue-900 text-white" onClick={()=> handleDeleteMessage(_id)}
                    >Delete Message</button>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;