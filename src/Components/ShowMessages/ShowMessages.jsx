import { useContext } from "react";
import { MessageContext } from './../MessageProvider/MessageProvider';
import SectionTitle from './../SectionTitile/SectionTitle';
import MessageCard from "../MessageCard/MessageCard";


const ShowMessages = () => {

    const { messages } = useContext(MessageContext);

    
    return (
        <div>
            <SectionTitle
            title='All Messages'
            >
            </SectionTitle>
            <div className="grid grid-cols-1 gap-4 my-5">
            {
                messages.map(messageData =>
                <MessageCard
                messageData={messageData}
                key={messageData._id}
                ></MessageCard>    
                )
            }
        </div>
        </div>
    );
};

export default ShowMessages;