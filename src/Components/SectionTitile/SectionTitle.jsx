import {motion} from 'framer-motion';

const SectionTitle = ({title}) => {
    return (
        <div className="text-center py-6">
            <motion.h2 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             transition={{
                 delay: 0.3,
                 x: { type: 'spring', stiffness: 60 },
                 opacity: { duration: 1 },
                 ease: 'easeIn',
                 duration: 1
             }}
            className="lg:text-5xl md:text-3xl text-2xl text-blue-900 font-bold">{title}</motion.h2>
        </div>
    );
};

export default SectionTitle;