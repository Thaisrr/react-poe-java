const UserCard = ({user: u}) => (
    <div className='card'>
        <h4>{u?.first_name} {u?.last_name}</h4>
        <p>{u?.gender}</p>
        <p>{u?.email}</p>
    </div>
)
export default UserCard;

