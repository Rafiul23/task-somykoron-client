

const UserCard = ({ user }) => {

    const { image, name, address, profession } = user;

    return (

        <div className="card bg-base-200">
            <figure><img src={image} alt="users" className="h-[350px] w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p className='py-4'>Address: {address}</p>
                <p className='py-4'>Profession: {profession}</p>
               
            </div>
        </div>
    );
};

export default UserCard;