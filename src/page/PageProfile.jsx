import  LowerMenuIcons  from './../components/LowerMenuIcons'
import UpperMenu from './../components/UpperMenu'
import Profile from './../container/Profile'
import './PageProfile.css'

function PageProfile(  ) {
    return (
        <div>
            <UpperMenu/>
            <Profile/>
            <LowerMenuIcons/>
        </div>
    )
}

export default PageProfile