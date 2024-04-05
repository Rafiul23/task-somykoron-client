import Button from "../Button/Button";


const MessageCard = ({messageData}) => {

    const {name, message} = messageData;
    console.log(messageData);

    return (
        <div className="card w-full bg-base-200 shadow-lg">
            <div className="card-body">
                <h2 className="card-title text-blue-900">{name}</h2>
                <p>{message}</p>
                <div className="card-actions justify-end">
                    <Button
                        title='Delete Message'
                    ></Button>
                </div>
            </div>
        </div>
    );
};

export default MessageCard;