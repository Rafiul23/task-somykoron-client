import { useContext } from "react";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitile/SectionTitle";
import { MessageContext } from "../MessageProvider/MessageProvider";
import Swal from 'sweetalert2'

const WriteMessage = () => {

    const { messages, setMessages } = useContext(MessageContext);



    function generateUniqueNumber() {
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        return timestamp.toString() + random.toString();
    }

    const _id = generateUniqueNumber();

    const handleMessages = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;

        const messageData = {
            _id,
            name,
            message
        };

        console.log(messageData);

        setMessages([...messages, messageData]);

        console.log(messages);

        e.target.name.value = '';
        e.target.message.value = '';

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return (
        <div>
            <SectionTitle
                title='Write Your Message'
            ></SectionTitle>

            <div>


                <div className="bg-base-200 w-1/2 my-5 mx-auto p-4">
                    <form onSubmit={handleMessages}>
                        <h2 className="text-blue-900 font-bold text-3xl ">Your Name: </h2>
                        <input type="text" placeholder="Your Name" name="name" className="border p-4 block my-4 w-full" required />
                        <br />
                        <h2 className="text-blue-900 font-bold text-3xl">Your Message: </h2>
                        <textarea name="message" id="message" placeholder="Your message" className="border p-4 block my-4 w-full" cols="30" rows="10"></textarea>

                        <Button
                            title='Submit'
                        ></Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WriteMessage;