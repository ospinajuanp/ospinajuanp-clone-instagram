import './Photo.css'

function Photo({user}) {

return (
    <div className='Photo'>
        <div className='Photo__img'>
            <img src={`https://unavatar.io/${user}`}  alt="ospinajuanp" />
        </div>
    </div>
    )
}

export default Photo