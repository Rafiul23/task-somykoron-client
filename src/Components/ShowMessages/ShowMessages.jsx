import { useContext } from "react";
import { MessageContext } from './../MessageProvider/MessageProvider';
import Button from './../Button/Button';
import SectionTitle from './../SectionTitile/SectionTitle';


const ShowMessages = () => {

    const { messages, setMessages } = useContext(MessageContext);

    
    return (
        <div>
            <SectionTitle
            title='All Messages'
            >
            </SectionTitle>
            <div className="grid grid-cols-1 gap-4">
            {
                messages.map(message =>
                    <div className="my-4" key={message._id}>
                        <div className="card w-full bg-base-200 shadow-lg">
                            <div className="card-body">
                                <h2 className="card-title">{message.name}</h2>
                                <p>{message.message}</p>
                                <div className="card-actions justify-end">
                                    <Button
                                        title='Delete Message'
                                    ></Button>
                                </div>
                            </div>
                        </div>
                    </div>)
            }
        </div>
        </div>
    );
};

export default ShowMessages;