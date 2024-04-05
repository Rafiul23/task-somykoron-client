import { Link } from 'react-router-dom';
import user from '../../assets/mobileUser.png';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitile/SectionTitle';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img src={user} className="md:w-1/2 w-full rounded-lg shadow-2xl" />
                <div className='md:w-1/2 w-full'>
                    <SectionTitle
                    title='Hello Everyone!'
                    ></SectionTitle>
                    <div className='text-center'>
                    <p className="pt-2">We are here to show user's messages</p>
                    <p className='pb-2'>Write your messages to all over the world</p>
                    <Link to='/addmessage'>
                    <Button
                    title='Get Started'
                    ></Button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;