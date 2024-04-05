import user from '../../assets/mobileUser.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={user} className="md:w-1/2 w-full rounded-lg shadow-2xl" />
                <div className='md:w-1/2 w-full'>
                    <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold">Hello Everyone!</h1>
                    <p className="py-6">We are here for user management</p>
                    <button className="btn bg-blue-900 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;