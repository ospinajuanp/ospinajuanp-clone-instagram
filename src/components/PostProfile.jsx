import './PostProfile.css'
import UserDisplay from './UserDisplay'

function PostProfile() {

return (
    <div className='PostProfile'>
        <div className='PostProfile__row'>
            <UserDisplay url={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=sph'}/>
            <UserDisplay url={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=sph'}/>
            <UserDisplay url={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=sph'}/>
        </div>
        <div className='PostProfile__row'>
            <UserDisplay url={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=sph'}/>
            <UserDisplay url={'https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1710028800&semt=sph'}/>
            <UserDisplay url={''}/>
        </div>
    </div>
    )
}

export default PostProfile