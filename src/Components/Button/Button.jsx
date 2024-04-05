import {motion} from 'framer-motion';

const Button = ({title}) => {
    return (
        <motion.button 
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className="btn bg-blue-900 text-white">
            {title}
        </motion.button>
    );
};

export default Button;