import { CiCirclePlus } from "react-icons/ci";
import './UserThmbnail.css'

function UserThmbnail({url=''}) {

return (
    <div className='UserThmbnail'>
        <div className='UserThmbnail__img'>
            {
                url ? <img src={url}  alt='' /> : <CiCirclePlus/>
            }
            
            
        </div>
    </div>
    )
}

export default UserThmbnail