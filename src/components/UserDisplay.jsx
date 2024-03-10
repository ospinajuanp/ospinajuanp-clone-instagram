import './UserDisplay.css'

function UserDisplay({url}) {

return (
    <div className='UserDisplay'>
        <div className='UserDisplay__img'>
            {url ? <img src={url} alt=""/> : ''}
        </div>
    </div>
    )
}

export default UserDisplay