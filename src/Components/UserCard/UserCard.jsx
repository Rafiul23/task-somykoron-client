import {motion} from 'framer-motion';

const UserCard = ({ user }) => {

    const { image, name, address, profession } = user;

    return (

        <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className="card bg-base-200">
            <figure><img src={image} alt="users" className="h-[350px] w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p className='py-4'>Address: {address}</p>
                <p className='py-4'>Profession: {profession}</p>
               
            </div>
        </motion.div>
    );
};

export default UserCard;