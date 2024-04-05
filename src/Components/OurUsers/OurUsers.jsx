import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitile/SectionTitle";
import UserCard from "../UserCard/UserCard";


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

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {
                    users.slice(0, 4).map(user => <UserCard
                    key={user._id}
                    user={user}
                    ></UserCard>)
                }
            </div>
        </div>
    );
};

export default OurUsers;