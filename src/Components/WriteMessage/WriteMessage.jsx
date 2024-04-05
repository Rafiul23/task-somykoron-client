import Button from "../Button/Button";
import SectionTitle from "../SectionTitile/SectionTitle";


const WriteMessage = () => {
    return (
        <div>
            <SectionTitle
                title='Write Your Message'
            ></SectionTitle>

            <div>
                

                <div className="bg-base-200 w-1/2 my-5 mx-auto p-4">
                    <form>
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