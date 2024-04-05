import React, { useEffect, useState } from 'react';
import UserCard from '../UserCard/UserCard';
import SectionTitle from '../SectionTitile/SectionTitle';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <SectionTitle
                title='All Users'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-6">
                {
                    users.map(user => <UserCard
                        key={user._id}
                        user={user}
                    ></UserCard>)
                }
            </div>

            <div className='my-5 text-center'>
                <Link to='/'>
                <Button
                title='Back to Home'
                ></Button>
                </Link>
            </div>
        </div>
    );
};

export default Users;