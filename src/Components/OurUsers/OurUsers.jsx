import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitile/SectionTitle";
import UserCard from "../UserCard/UserCard";
import { Link } from "react-router-dom";
import Button from "../Button/Button";


const OurUsers = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <SectionTitle
                title='Our Users'
            ></SectionTitle>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-6">
                {
                    users.slice(0, 4).map(user => <UserCard
                    key={user._id}
                    user={user}
                    ></UserCard>)
                }
            </div>
            <div className="text-center my-5">
                <Link to='/users'>
                <Button
                title='See All Users'
                ></Button>
                </Link>
            </div>
        </div>
    );
};

export default OurUsers;