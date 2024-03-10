import './UserThmbnail.css'

function UserThmbnail({user}) {

return (
    <div className='UserThmbnail'>
        <div className='UserThmbnail__img'>
            <img src={`https://unavatar.io/${user}`}  alt={user} />
        </div>
    </div>
    )
}

export default UserThmbnail