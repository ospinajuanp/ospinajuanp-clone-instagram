import './UserDisplay.css'

function UserDisplay({url, reels=false}) {

return (
    <div className='UserDisplay'>
        <div className='UserDisplay__img'>
            {url ? <img src={url} alt="" style={reels ? {aspectRatio: '0.5'} : {aspectRatio: '1/1'}}/> : ''}
        </div>
    </div>
    )
}

export default UserDisplay