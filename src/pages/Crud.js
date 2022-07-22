import {useEffect, useState} from "react";
import {getAll} from "../utils/services/UserService";
import UserCard from "../components/UserCard";
import {UserForm} from "../components/UserForm";
import {func} from "prop-types";

const Crud = function () {
    const [users, setUsers] = useState([]);
    const [update, setUpdate] = useState(0);

    useEffect(() => {
        const fetchUsers = async () => {
            const user_response = await getAll();
            setUsers(user_response);
        }
        fetchUsers();
    }, [update])

    return (
        <>
            <h1>Users Dashboard</h1>
            <article>
                <UserForm reload={() => setUpdate(update + 1 )}/>
            </article>
            <article>
                <h2>All Users</h2>
                <div className='grid'>
                    {users.map(u => <UserCard user={u} key={u.id}/>)}
                </div>
            </article>
        </>
    )
}

export default Crud;